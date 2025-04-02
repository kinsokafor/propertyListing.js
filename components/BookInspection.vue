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
        <div class="d-flex justify-content-between">
          <span>Inspection fee:</span>
          <span>{{ amountDue }}</span>
        </div>
      </div>
      <button type="submit" class="form-btn">Book Inspection</button>
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
  import { Request, toLocale } from "@/helpers";
  import { useAlertStore } from "@/store/alert";
  import { useAuthStore } from '@/store/auth';
  import AccountsForm from './AccountsForm.vue'
  
  const req = new Request();
  const processing = ref(false);
  const alertStore = useAlertStore();
  const authStore = useAuthStore();
  const values = ref({})
  const date = new Date;
  const today = computed(() => `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`)

//   const unavailableDates = ref([])
  
  const props = defineProps({
    data: Object
  })
  
  const amountDue = computed(() => toLocale(props.data.inspection_fee ?? 0, {
    currency: props.data.inspection_fee_currency ?? "NGN"
  }))
  
  const fields = computed(() => [
    {
      label: "Proposed date",
      name: "inspection_date",
      as: "date",
      rules: yup.string().required(),
      minDate: today.value,
      dateFormat: "Y-m-d",
    }
  ]);
  
  const handleSubmit = (data, actions) => {
    processing.value = true;
    data.property_id = props.data.id
    req
      .post(req.root + "/listing-api/properties/book-inspection", data)
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
    // fetchUnavalableDates();
  })
  
//   async function fetchUnavalableDates() {
//     processing.value = true;
//     await req
//       .post(req.root + "/listing-api/apartments/unavailable-dates", {apartment_id: props.data.id})
//       .then((r) => {
//         processing.value = false;
//         unavailableDates.value = r.data.map(i => i.unavailable_date)
//       })
//       .catch((e) => {
//         processing.value = false;
//       });
//   }
  </script>
  
  <style lang="scss" scoped></style>
  