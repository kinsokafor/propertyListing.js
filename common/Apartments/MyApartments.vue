<template>
  <restricted>
    <div class="row">
      <div class="col-12">
        <h4>My Apartments</h4>
      </div>
      <div class="col-md-8">
        <data-filter :data="data" v-slot="{ outputData }">
          <div class="row">
            <div
              class="col-lg-6 col-md-6 col-12"
              v-for="data in outputData"
              :key="data.id"
            >
              <apartment-item :data="data"></apartment-item>
            </div>
          </div>
        </data-filter>
      </div>
      <div class="col-md-4">
        <search-filters></search-filters>
      </div>
    </div>
  </restricted>
</template>

<script setup>
import ApartmentItem from "@module/propertyListing/components/ApartmentItem.vue";
import SearchFilters from "@module/propertyListing/components/SearchFilters.vue";
import { useAuthStore } from "@/store/auth";
import { computed } from "vue";
import { useApartmentsStore } from "@module/propertyListing/store/apartments";
import DataFilter from "@filter/DataFilter.vue";

const authStore = useAuthStore();
const apartmentsStore = useApartmentsStore();

const data = computed(() => {
  if (authStore.getUser?.id === undefined) return [];
  return apartmentsStore.get({ owner_id: authStore.getUser?.id });
});
</script>

<style lang="scss" scoped></style>
