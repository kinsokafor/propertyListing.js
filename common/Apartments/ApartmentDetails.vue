<template>
    <div>
        <div class="row">
            <div class="col-12">
                <h2 class="fw-6 fs-40 ls-1 color-dark-2 text-uppercase mb-32 ">{{data.name}}</h2>
                <slider :images="data.images"></slider>
            </div>
        </div>
    </div>
</template>

<script setup>
import Slider from '@module/propertyListing/components/Slider.vue';
import { computed } from "vue";
import { useApartmentsStore } from "@module/propertyListing/store/apartments";
import { useRoute } from 'vue-router';

const apartmentsStore = useApartmentsStore();
const route = useRoute()

const data = computed(() => apartmentsStore.get({id: route.params.id})[0] ?? {})
</script>

<style lang="scss" scoped>

</style>