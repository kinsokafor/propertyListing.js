<template>
  <div
    class="testimonial-block"
    data-slick-index="2"
    aria-hidden="false"
    tabindex="0"
  >
    <img :src="bgs" class="w-100" alt="" />
    <div class="data">
        <div class="user-img">
        <img :src="userImg" alt="" />
        </div>
        <h6 class="name text-center">{{getFullname(currentUser)}}</h6>
        <p class="text-center">

        </p>
    </div>
  </div>
</template>

<script setup>
import {useAuthStore} from '@/store/auth'
import {computed, ref, watchEffect} from 'vue'
import {getFullname, getProfilePicture} from '@/helpers'
import bgs from "@module/propertyListing/assets/images/bgs.jpg";

const authStore = useAuthStore()
const currentUser = computed(() => authStore.getUser)

const userImg = ref("#")

watchEffect(() => {
    getProfilePicture(currentUser.value).then(r => {
        userImg.value = r
    })
})
</script>

<style lang="scss" scoped>
// .testimonial-block {
//     width: 100%;
//     max-width: 348px;
//     // background: var(--highlight1);
//     border-radius: 14px;
//     overflow: hidden;
// }
// .data {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     position: relative;
//     top: -50px;
// }
.data img {
    height: 100px;
    border-radius: 50%;
    border: 10px solid #afb4c7c9;
}
</style>
