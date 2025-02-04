<template>
  <div>
    You are not signed in. Login below:
  </div>
  <CreateForm
    :fields="fields"
    :initial-values="{}"
    @submit="handleSubmit"
    :processing="processing"
  >
  <template #submitButton>
    <button type="submit" class="form-btn">Login</button>
  </template>
  </CreateForm>
  <hr>
  <div>
    <a href="javaScript:void(0)" @click.prevent="state = 'registration'"
      ><strong>CREATE</strong> a new account.</a> if you don't have an account yet.
  </div>
</template>

<script setup>
import { computed, ref, inject } from "vue";
import CreateForm from "@/components/form/CreateForm.vue";
import * as yup from "yup";
import { Request } from "@/helpers";
import { useAlertStore } from "@/store/alert";

const req = new Request();
const processing = ref(false);
const alertStore = useAlertStore();
const state = inject("state", "login");

const fields = computed(() => [
  {
    label: "Email",
    placeholder: "Email",
    name: "email",
    rules: yup.mixed().required(),
  },
  {
    label: "Password",
    placeholder: "Password",
    name: "password",
    as: "password",
    rules: yup.mixed().required(),
  },
]);

const handleSubmit = async (data, actions) => {
  processing.value = true;
  await req
    .post(req.root + "/api/login", data)
    .then((r) => {
      processing.value = false;
      actions.resetForm();
      alertStore.add("Done");
      // window.location.reload()
    })
    .catch((e) => {
      processing.value = false;
      alertStore.add(e.response.data, "danger");
    });
};
</script>

<style lang="scss" scoped>
a {
  color: var(--red);
}
</style>
