<template>
  <div class="check-out">
    <div class="content mb-24">
      <div class="img-block position-relative">
        <img
          :src="data.images[0] ?? ''"
          alt=""
        />
        <span class="color-dark-3 bg-white position-absolute">{{data.price}}<sup>/{{ data.duration }}</sup></span>
      </div>
      <a :href="`#/apartment/${data.id}`" class="title-text"
        >{{data.name}}</a
      >
      <p>{{data.location}}</p>
      <ul class="list-unstyled">
        <li>
          <img :src="bed" alt="" />
          {{data.rooms}} Rooms
        </li>
        <li>
          <img :src="bathroom" alt="" />
          {{data.bathrooms}} Baths
        </li>
        <li>
          <img :src="size" alt="" />
          {{data.size}}
        </li>
      </ul>
      <slot>
        <a :href="`#/apartment/${data.id}`" class="real-btn bordered mb-24">Details</a>
      </slot>
    </div>
  </div>
</template>

<script setup>
import bed from "@module/propertyListing/assets/svg/bed.svg";
import bathroom from "@module/propertyListing/assets/svg/bathroom.svg";
import size from "@module/propertyListing/assets/svg/size.svg";

const props = defineProps({
    data: Object
})
</script>

<style lang="scss" scoped></style>
