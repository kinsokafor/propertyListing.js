<template>
    <restricted access="1,2,3,4,5,6,7,8,9">
  <div class="house-detail">
    <h2>add a Review</h2>
    <div class="d-flex align-items-center">
      <div class="user">
        <h6 class="pe-3">Rating</h6>
      </div>
      <div class="form-group">
        <fieldset>
          <span class="star-cb-group">
            <input type="radio" id="rating-5" name="rating" v-model="rating" value="5" /><label
              for="rating-5"
              >5</label
            >
            <input type="radio" id="rating-4" name="rating" v-model="rating" value="4" /><label
              for="rating-4"
              >4</label
            >
            <input type="radio" id="rating-3" name="rating" v-model="rating" value="3" /><label
              for="rating-3"
              >3</label
            >
            <input type="radio" id="rating-2" name="rating" v-model="rating" value="2" /><label
              for="rating-2"
              >2</label
            >
            <input
              type="radio"
              id="rating-1"
              name="rating" v-model="rating"
              value="1"
              checked="checked"
            /><label for="rating-1">1</label>
            <input
              type="radio"
              id="rating-0"
              name="rating" v-model="rating"
              value="0"
              class="star-cb-clear"
            /><label for="rating-0">0</label>
          </span>
        </fieldset>
      </div>
    </div>
    <CreateForm
      :fields="fields"
      :initial-values="{}"
      @submit="handleSubmit"
      :processing="processing"
    >
      <template #submitButton>
        <button type="submit" class="form-btn">Submit</button>
      </template>
    </CreateForm>
  </div>
</restricted>
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
const rating = ref(1)

const props = defineProps({
    contentId: Number,
    contentType: {
        type: String,
        default: 'apartment',
        validator: (prop) => ['apartment', 'property'].includes(prop)
    }
})

const fields = computed(() => [
  {
    label: "Comment",
    name: "comment",
    as: "textarea",
    rules: yup.string().required("Please add a comment")
  },
]);

const handleSubmit = (data, actions) => {
  processing.value = true;
  if(props.contentId === undefined) return;
    data.content_type = props.contentType;
    data.rating = rating.value;
  req
    .post(req.root+"/listing-api/reviews/update/"+props.contentId, data)
    .then((r) => {
      processing.value = false;
      actions.resetForm();
      rating.value = 1;
      alertStore.add("Done");
    })
    .catch((e) => {
      processing.value = false;
      alertStore.add(e.response.data, "danger");
    });
};
</script>

<style lang="scss" scoped></style>
