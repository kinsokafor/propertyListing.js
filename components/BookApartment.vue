<template>
  <CreateForm
    :fields="fields"
    :initial-values="{}"
    @submit="handleSubmit"
    :processing="processing"
  >
  </CreateForm>
</template>

<script setup>
import { computed, ref } from "vue";
import CreateForm from "@/components/form/CreateForm.vue";
import * as yup from "yup";
import { Request } from "@/helpers";
import { useAlertStore } from "@/store/alert";

const req = new Request();
const processing = ref(false);
const alertStore = useAlertStore();

const fields = computed(() => [
  {
    label: "Check In Date",
    name: "date",
    as: "daterange",
    rules: yup.string().required()
  }
]);

const handleSubmit = (data, actions) => {
  processing.value = true;
  req
    .post(req.root + "/end-point", data)
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
</script>

<style lang="scss" scoped></style>
