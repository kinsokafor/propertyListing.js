<template>
    <div class="stars">
        <i class="fa-star" :class="{fas: rating >= 1, far: rating < 1}"></i>
        <i class="fa-star" :class="{fas: rating >= 2, far: rating < 2}"></i>
        <i class="fa-star" :class="{fas: rating >= 3, far: rating < 3}"></i>
        <i class="fa-star" :class="{fas: rating >= 4, far: rating < 4}"></i>
        <i class="fa-star" :class="{fas: rating >= 5, far: rating < 5}"></i>
    </div>
</template>

<script setup>
    const props = defineProps({
        rating: {
            type: Number,
            default: 0
        }
    })
</script>

<style lang="scss" scoped>

</style>