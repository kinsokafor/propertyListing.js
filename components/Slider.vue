<template>
    <swiper-container>
      <swiper-slide v-for="image in images" :key="image">
        <div class="image-container" :style="{ backgroundImage: `url(${image})` }"></div>
      </swiper-slide>
    </swiper-container>
  </template>
  
  <script setup>
  import { register } from 'swiper/element/bundle';
  import { onMounted } from 'vue';
  import { Navigation, Pagination } from 'swiper/modules';
  
  // Register Swiper custom elements globally
  register();
  
  const props = defineProps({
    images: {
      type: Array,
      required: true,
    },
  });
  
  onMounted(() => {
    const swiperEl = document.querySelector('swiper-container');
  
    // Swiper configuration
    const swiperParams = {
      slidesPerView: 1,
      slidesPerGroup: 1,
      loop: true,
      autoplay: {
        delay: 3000, // Delay between slides (in milliseconds)
        disableOnInteraction: false, // Continue autoplay after user interaction
      },
      modules: [Navigation, Pagination],
      breakpoints: {
        1024: {
          slidesPerView: 2,
          slidesPerGroup: 1,
        },
      },
      on: {
        init() {
          console.log('Swiper initialized with autoplay!');
        },
      },
    };
  
    // Assign parameters and initialize Swiper
    Object.assign(swiperEl, swiperParams);
    swiperEl.initialize();

    // Force autoplay to start
  setTimeout(() => {
    swiperEl.swiper.autoplay?.start();
  }, 500);
  });
  </script>
  
  <style lang="scss" scoped>
  .image-container {
    height: 300px;
    background-size: cover;
    background-position: center center;
  }
  </style>
  