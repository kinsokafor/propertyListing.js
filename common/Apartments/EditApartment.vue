<template>
  <div class="row justify-content-around">
    <div class="col-md-7">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Edit Apartment</h5>
          <CreateForm
            :fields="fields"
            :initial-values="{}"
            @submit="handleSubmit"
            :processing="processing"
            :columns="{ top: 1, topAfter: 2, middle: 3 }"
            :initialValues="data"
            @values="(v) => (values = v)"
          >
          </CreateForm>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import CreateForm from "@/components/form/CreateForm.vue";
import * as yup from "yup";
import { useAlertStore } from "@/store/alert";
import { useApartmentsStore } from "@module/propertyListing/store/apartments";
import { useRoute } from "vue-router";
import { EvoUId } from '@/helpers'

const evouid = new EvoUId()
const processing = ref(false);
const alertStore = useAlertStore();
const apartmentsStore = useApartmentsStore();
const values = ref({});
const route = useRoute();
const data = computed(
  () => apartmentsStore.get({ id: evouid.decode(route.params.id) })[0] ?? {}
);

const fields = computed(() => [
  {
    label: "Name of apartment",
    name: "name",
    rules: yup.string().required(),
  },
  {
    label: "Description",
    name: "description",
    rules: yup.string().required(),
    as: "wysiwyg",
    position: "bottom",
  },
  {
    label: "Location",
    name: "location",
    rules: yup.string().required(),
    as: "textarea",
    rows: 2,
  },
  {
    label: "Price",
    name: "price",
    rules: yup.number().min(0).required(),
    placeholder: "Enter price",
    position: "top",
    as: "currency",
  },
  {
    label: "Rooms",
    name: "rooms",
    rules: yup.number(),
    position: "middle",
    column: "left",
  },
  {
    label: "Bathrooms",
    name: "bathrooms",
    rules: yup.number(),
    position: "middle",
    column: "center",
  },
  {
    label: "Size",
    name: "size",
    rules: yup.string(),
    position: "middle",
    column: "right",
  },
  {
    label: "Images",
    name: "images",
    as: "filepond",
    acceptedFileTypes: ["image/jpg", "image/jpeg", "image/png"],
    rules: yup.array().required(),
    allowMultiple: true,
    position: "middleAfter",
  },
  {
    label: "Video",
    name: "video",
    as: "filepond",
    acceptedFileTypes: ["video/mp4", "video/mpeg"],
    allowMultiple: false,
    position: "middleAfter",
  }
]);

const handleSubmit = (data, actions) => {
  apartmentsStore
    .update(evouid.decode(route.params.id), data)
    .then((r) => {
      processing.value = false;
      alertStore.add("Done");
    })
    .catch((e) => {
      processing.value = false;
      alertStore.add(e.response.data, "danger");
    });
};
</script>

<style lang="scss" scoped></style>
