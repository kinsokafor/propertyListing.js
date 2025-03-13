<template>
  <div class="row justify-content-around">
    <div class="col-md-7">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">New Property</h5>
          <CreateForm
            :fields="fields"
            @submit="handleSubmit"
            :processing="processing"
            :columns="{ top: 1, topAfter: 2, middle: 2 }"
            :initialValues="{}"
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
import { usePropertiesStore } from "@module/propertyListing/store/properties";

const processing = ref(false);
const alertStore = useAlertStore();
const propertiesStore = usePropertiesStore();
const values = ref({});

const fields = computed(() => [
  {
    label: "Name of property",
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
    label: "Type of property",
    name: "type_of_property",
    rules: yup.string(),
    position: "middle",
    column: "left",
    as: "vselect",
    options: [
      "Land",
      "Residential Land",
      "Commercial Land",
      "Agricultural Land",
      "Industrial Land",
      "Mixed-Use Land",
      "Duplex",
      "Detached Duplex",
      "Semi-Detached Duplex",
      "Terraced Duplex",
      "Bungalow",
      "Detached Bungalow",
      "Semi-Detached Bungalow",
      "Flats",
      "Studio Apartment",
      "Self-Contained Apartment",
      "Mini Flat (1 Bedroom Apartment)",
      "2 Bedroom Apartment",
      "3 Bedroom Apartment",
      "4+ Bedroom Apartment",
      "Penthouse",
      "Mansion",
      "Villa",
      "Townhouse",
      "Cottage",
      "Chalet",
      "Condominium",
      "Serviced Apartment",
      "Shortlet Apartment",
      "Block of Flats",
      "Commercial Property",
      "Office Space",
      "Shop/Store",
      "Shopping Complex",
      "Warehouse",
      "Factory",
      "Event Center",
      "Hotel",
      "Guest House",
      "Hostel",
      "School",
      "Hospital/Clinic",
      "Religious Building",
    ],
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
  },
]);

const handleSubmit = (data, actions) => {
  processing.value = true;
  propertiesStore
    .add(data)
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
