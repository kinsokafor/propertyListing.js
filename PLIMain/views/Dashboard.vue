<template>
  <restricted v-slot="{ user }">
    <div class="row">
      <div class="col-md-8">
        <div class="d-flex">
          <router-link :to="`my-apartments`">
            <counter-card
              :end-point="`api/dbtable/apartments?owner_id=${user.id}`"
              :template="Stats"
              :icon-class="apartments"
              title="Apartments"
              surfix="Listing"
            ></counter-card>
          </router-link>
          <router-link :to="`my-properties`">
            <counter-card
              :end-point="`api/dbtable/properties?owner_id=${user.id}`"
              :template="Stats"
              :icon-class="loft"
              title="Properties"
              surfix="Listing"
            ></counter-card
          ></router-link>
          <router-link :to="`owner-schedules`">
            <counter-card
              :end-point="`api/dbtable/properties?owner_id=${user.id}`"
              :template="Stats"
              :icon-class="schedule"
              title="Schedules"
              surfix="Schedule"
            ></counter-card
          ></router-link>
        </div>
      </div>
      <div class="col-md-4">
        <user-card class="mb-4"></user-card>
        <div class="solution mb-4">
          <div class="content text-center">
            <img :src="dealIcon2" class="mb-24" alt="" />
            <h4 class="fw-6 fs-33 font-sec color-dark-3 mb-16">
              Sell a Property
            </h4>
            <p class="fs-16 color-gray-4 font-sec lh-130 mb-24">
              Discover a hassle-free way to buy, sell, or rent your dream
              property with our all-in-one real estate solution.
            </p>
            <a href="#/property/new" class="real-btn bordered text-capitalize"
              >List a property</a
            >
          </div>
        </div>
        <div class="solution mb-4">
          <div class="content text-center">
            <img :src="houseIcon2" class="mb-24" alt="" />
            <h4 class="fw-6 fs-33 font-sec color-dark-3 mb-16">
              Rent Apartments
            </h4>
            <p class="fs-16 color-gray-4 font-sec lh-130 mb-24">
              Discover a hassle-free way to buy, sell, or rent your dream
              property with our all-in-one real estate solution.
            </p>
            <a href="#/apartment/new" class="real-btn bordered text-capitalize"
              >List an apartment</a
            >
          </div>
        </div>
      </div>
    </div>
  </restricted>
</template>
<script setup>
import UserCard from "@module/propertyListing/components/UserCard.vue";
import Stats from "@module/propertyListing/components/Stats.vue";
import CounterCard from "@components/theme/CounterCard.vue";
import dealIcon2 from "@module/propertyListing/assets/icon/deal-icon-2.png";
import houseIcon2 from "@module/propertyListing/assets/icon/house-icon-2.png";
import schedule from "@module/propertyListing/assets/icon/schedule.png";
import apartments from "@module/propertyListing/assets/svg/apartments.svg";
import loft from "@module/propertyListing/assets/svg/loft.svg";
</script>
<style lang="scss" scoped>
.d-flex {
  gap: 20px;
  flex-wrap: wrap;
}
</style>
