<template>
    <div>
        {{ inspectionsStore.getUnscheduled() }}
    </div>
</template>

<script setup>
    import {useInspectionsStore} from '@module/propertyListing/store/inspections'

    const inspectionsStore = useInspectionsStore()
</script>

<style lang="scss" scoped>

</style>