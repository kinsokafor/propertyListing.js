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
.testimonial-block {
    margin-left: 0px;
    margin-right: 0px;
    border-radius: 20px;
}

.data img {
    height: 100px;
    border-radius: 50%;
    border: 10px solid #afb4c7c9;
}

// @media (max-width: 992px) {
//     .testimonial-block {
        
//     }
// }
</style>
