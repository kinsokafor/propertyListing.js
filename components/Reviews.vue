<template>
  <div class="house-detail">
    <h2 class="mb-16">({{data.length}} Review<span v-if="data.length > 1">s</span>)</h2>
    <review v-for="d in data" :data="d" :key="d.id"></review>
  </div>
</template>

<script setup>
import Review from "./Review.vue";
import { useReviewsStore } from "@module/propertyListing/store/reviews";
import { computed } from "vue";

const props = defineProps({
  contentId: Number,
  contentType: {
    type: String,
    default: "apartment",
    validator: (prop) => ["apartment", "property"].includes(prop),
  },
});

const store = useReviewsStore();

const data = computed(() =>
  store.get({ content_id: props.contentId, content_type: props.contentType })
);
</script>

<style lang="scss" scoped></style>
