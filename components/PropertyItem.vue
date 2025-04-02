<template>
  <div class="check-out" @click="$router.push(`/property/${id}`)">
    <div class="content mb-24">
      <div class="img-block position-relative">
        <img :src="data.images[0] ?? ''" alt="" />
        <span class="color-dark-3 bg-white position-absolute">{{
          toLocale(data.price, {
            currency: data.price_currency,
            locale: "en-NG",
          })
        }}</span>
      </div>
      <a :href="`#/property/${id}`" class="title-text">{{ data.title }}</a>
      <p>{{ data.location }}</p>
      <ul class="list-unstyled">
        <li>
          <img :src="bed" alt="" />
          {{ data.rooms }} Rooms
        </li>
        <li>
          <img :src="bathroom" alt="" />
          {{ data.bathrooms }} Baths
        </li>
        <li>
          <img :src="size" alt="" />
          {{ data.size }}
        </li>
      </ul>
      <slot>
        <a :href="`#/property/${id}`" class="real-btn bordered mb-24"
          >Details</a
        >
      </slot>
    </div>
  </div>
</template>

<script setup>
import bed from "@module/propertyListing/assets/svg/bed.svg";
import bathroom from "@module/propertyListing/assets/svg/bathroom.svg";
import size from "@module/propertyListing/assets/svg/size.svg";
import { EvoUId, toLocale } from "@/helpers";
import { computed } from "vue";

const evouid = new EvoUId();

const props = defineProps({
  data: Object,
});

const id = computed(() => evouid.encode(props.data.id));
</script>

<style lang="scss" scoped>
.check-out {
  cursor: pointer;
}
</style>
