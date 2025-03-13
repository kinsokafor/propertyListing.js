<template>
    <restricted>
      <div class="row">
        <div class="col-12">
          <h4>My Properties</h4>
        </div>
        <div class="col-md-8">
          <data-filter :data="data" v-slot="{ outputData }">
            <div class="row">
              <div
                class="col-lg-6 col-md-6 col-12"
                v-for="data in outputData"
                :key="data.id"
              >
                <property-item :data="data"></property-item>
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
  import PropertyItem from "@module/propertyListing/components/PropertyItem.vue";
  import SearchFilters from "@module/propertyListing/components/SearchFilters.vue";
  import { useAuthStore } from "@/store/auth";
  import { computed } from "vue";
  import { usePropertiesStore } from "@module/propertyListing/store/properties";
  import DataFilter from "@filter/DataFilter.vue";
  
  const authStore = useAuthStore();
  const propertiesStore = usePropertiesStore();
  
  const data = computed(() => {
    if (authStore.getUser?.id === undefined) return [];
    return propertiesStore.get({ owner_id: authStore.getUser?.id });
  });
  </script>
  
  <style lang="scss" scoped></style>
  