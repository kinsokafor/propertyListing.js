<template>
    <login v-if="state === 'login'"></login>
    <registration v-else></registration>
</template>

<script setup>
    import {ref, provide} from 'vue'
    import Login from './Login.vue';
    import Registration from './Registration.vue';

    const state = ref('login')

    provide('state', state)
</script>

<style lang="scss" scoped>

</style>