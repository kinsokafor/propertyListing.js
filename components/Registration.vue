<template>
  <div>
    Registration form:
  </div>
  <CreateForm
    :fields="fields"
    :initial-values="{}"
    @submit="handleSubmit"
    :processing="processing"
  >
  <template #submitButton>
    <button type="submit" class="form-btn">Create Account</button>
  </template>
  </CreateForm>
  <hr>
  <div>
    <a href="javaScript:void(0)" @click.prevent="state = 'login'"
      ><strong>SIGN IN</strong> to an existing account.</a
    > if you already have an account.
  </div>
</template>

<script setup>
import { computed, ref, inject } from "vue";
import CreateForm from "@/components/form/CreateForm.vue";
import * as yup from "yup";
import { Request } from "@/helpers";
import { useAlertStore } from "@/store/alert";
import { useAuthStore } from "@/store/auth";

const req = new Request();
const processing = ref(false);
const alertStore = useAlertStore();
const authStore = useAuthStore();
const state = inject("state", "login");

const fields = computed(() => [
  {
    label: "Full Name (Surname first)",
    placeholder: "Enter your full name",
    // hint: "Surname first, then other names",
    name: "fullname",
    rules: yup
      .string()
      .required()
      .matches(
        /^[a-zA-Z]+(?:\s[a-zA-Z]+)+$/,
        "Full name must contain at least two names and only letters and spaces are allowed"
      ),
  },
  {
    label: "Phone number",
    name: "phone",
    rules: yup
      .string()
      .required("Phone number is required")
      .matches(
        /^(\+?[1-9]\d{1,3}|[0])\d{7,10}$/,
        'Phone number must be valid and include only digits, optionally starting with a "+" for the country code'
      ),
  },
  {
    label: "Email address",
    name: "email",
    rules: yup.mixed().required(),
  },
  {
    label: "Password",
    name: "password",
    as: "password",
    rules: yup
      .string()
      .required("Password is required")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@#$%^&*_]{6,}$/,
        "Password must be at least 6 characters long and contain both letters and numbers"
      ),
  },
]);

const handleSubmit = async (data, actions) => {
  const [surname, middle_name, ...other_names] = data.fullname.trim().split(" ")
  data.surname = surname
  if(other_names.length === 0) {
    data.middle_name = ""
    data.other_names = middle_name
  } else {
    data.middle_name = middle_name
    data.other_names = other_names.join(" ");
  }
  delete data.fullname
  data.status = "active";
  processing.value = true;
  await req
    .post(req.root + "/listing-api/accounts/registration", data)
    .then((r) => {
      // processing.value = false;
      login(data.email, data.password);
    })
    .catch((e) => {
      processing.value = false;
      alertStore.add(e.response.data, "danger");
    });
};

const login = async (email, password) => {
  processing.value = true;
  await authStore.login({email: email, password: password})
    .then((r) => {
      processing.value = false;
      actions.resetForm();
      alertStore.add("Done");
    })
    .catch((e) => {
      processing.value = false;
      alertStore.add(e.response.data, "danger");
    });
}
</script>

<style lang="scss" scoped>
a {
  color: var(--red);
}
</style>
