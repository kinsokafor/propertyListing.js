<template>

  <CreateForm
    :fields="fields"
    :initial-values="{}"
    @submit="handleSubmit"
    :processing="processing"
    @values="v => values = v"
    v-if="authStore.hasAccess([1,2,3,4,5,6,7,8,9])"
  >
  <template #submitButton>
    <div class="reservation-details">
      <div class="d-flex justify-content-between" v-if="values?.start_date != undefined">
        <span>Check in date:</span>
        <span>{{ checkInDate }}</span>
      </div>
      <div class="d-flex justify-content-between" v-if="values?.end_date != undefined">
        <span>Check out date:</span>
        <span>{{ checkOutDate }}</span>
      </div>
      <div class="d-flex justify-content-between">
        <span>Number of days:</span>
        <span>{{ daysBetween }}</span>
      </div>
      <div class="d-flex justify-content-between">
        <span>Amount due:</span>
        <span>{{ amountDue }}</span>
      </div>
    </div>
    <button type="submit" class="form-btn">Book Apartment</button>
  </template>
  </CreateForm>
  <div v-else>
    <accounts-form></accounts-form>
  </div>
</template>

<script setup>
import { computed, ref, watchEffect } from "vue";
import CreateForm from "@/components/form/CreateForm.vue";
import * as yup from "yup";
import { Request, formatDate } from "@/helpers";
import { useAlertStore } from "@/store/alert";
import {daysBetweenDates, displayDate} from '@module/propertyListing/helpers'
import { useAuthStore } from '@/store/auth';
import AccountsForm from './AccountsForm.vue'

const req = new Request();
const processing = ref(false);
const alertStore = useAlertStore();
const authStore = useAuthStore();
const values = ref({})
const date = new Date;
const today = computed(() => `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`)
const startDate = computed(() => new Date(values.value?.start_date))
const endDate = computed(() => new Date(values.value?.end_date))
const daysBetween = computed(() => daysBetweenDates(startDate.value, endDate.value))
const checkInDate = computed(() => displayDate(startDate.value))
const checkOutDate = computed(() => displayDate(endDate.value))
const unavailableDates = ref([])

const props = defineProps({
  data: Object
})

const amountDue = computed(() => daysBetween.value * props.data.price)

const fields = computed(() => [
  {
    label: "Select Dates",
    name: "date",
    as: "daterange",
    rules: yup.string().required(),
    minDate: today.value,
    dateFormat: dateFormat
  }
]);

const handleSubmit = (data, actions) => {
  processing.value = true;
  data.apartment_id = props.data.id
  req
    .post(req.root + "/listing-api/apartments/book", data)
    .then((r) => {
      processing.value = false;
      actions.resetForm();
      alertStore.add("Done");
    })
    .catch((e) => {
      processing.value = false;
      alertStore.add(e.response.data, "danger");
    });
};

watchEffect(() => {
  if(props.data?.id === undefined) return
  processing.value = true;
  req
    .post(req.root + "/listing-api/apartments/unavailable-dates", {apartment_id: props.data.id})
    .then((r) => {
      processing.value = false;
      unavailableDates.value = r.data.map(i => i.unavailable_date)
    })
    .catch((e) => {
      processing.value = false;
    });
})

function dateFormat(classes, date) {
  if (!classes.disabled) {
    const index = unavailableDates.value.findIndex(i => i === formatDate(date, "YYYY-MM-DD"))
    classes.disabled = index !== -1
  }
  return classes
}
</script>

<style lang="scss" scoped></style>
