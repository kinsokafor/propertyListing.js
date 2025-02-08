<template>
    <div class="review border-0 mb-32">
      <div class="d-flex align-items-center justify-content-between mb-16">
        <div class="user">
          <user-image :user-id="data.user_id" style="width: 60px"></user-image>
          <div class="content">
            <h4><get-fullname :id="data.user_id"></get-fullname></h4>
            <p>{{useDateFormat(data.updated_at, "MMM d, YYYY")}}</p>
          </div>
        </div>
        <stars :rating="data.rating"></stars>
      </div>
      <p>
        "{{data.comment}}"
      </p>
    </div>
</template>

<script setup>
    import GetFullname from '@/components/theme/GetFullname.vue'
    import UserImage from '@/components/theme/UserImage.vue'
    import Stars from './Stars.vue';
    import { useDateFormat } from '@vueuse/core';
    const props = defineProps({
        data: Object
    })
</script>

<style lang="scss" scoped>

</style>