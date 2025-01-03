<template>
  <div class="row">
    <div class="col-lg-4 col-md-6 col-sm-6">
      <user-card></user-card>
    </div>
    <div class="col-lg-4 col-md-6 col-sm-6 solution">
      <div class="content text-center">
        <img :src="dealIcon2" class="mb-24" alt="" />
        <h4 class="fw-6 fs-33 font-sec color-dark-3 mb-16">Sell a Property</h4>
        <p class="fs-16 color-gray-4 font-sec lh-130 mb-24">
          Discover a hassle-free way to buy, sell, or rent your dream property
          with our all-in-one real estate solution.
        </p>
        <a href="/apartment/new" class="real-btn bordered text-capitalize"
          >List a property</a
        >
      </div>
    </div>
    <div class="col-lg-4 col-md-6 col-sm-6 solution">
      <div class="content text-center">
        <img :src="houseIcon2" class="mb-24" alt="" />
        <h4 class="fw-6 fs-33 font-sec color-dark-3 mb-16">Rent Apartments</h4>
        <p class="fs-16 color-gray-4 font-sec lh-130 mb-24">
          Discover a hassle-free way to buy, sell, or rent your dream property
          with our all-in-one real estate solution.
        </p>
        <a href="#/apartment/new" class="real-btn bordered text-capitalize"
          >List an apartment</a
        >
      </div>
    </div>
  </div>
</template>
<script setup>
import UserCard from "@module/propertyListing/components/UserCard.vue";
import dealIcon2 from "@module/propertyListing/assets/icon/deal-icon-2.png";
import houseIcon2 from "@module/propertyListing/assets/icon/house-icon-2.png";
</script>
<style lang="scss" scoped></style>
