<template>
  <div class="house-detail-slider">
    <div class="item" v-for="image in images" :key="image">
      <img
        :src="image"
        class="radius-10 mb-24"
        alt=""
      />
    </div>
  </div>
  <div class="house-detail-slider-nav mb-64">
    <div class="item" v-for="image in images" :key="image">
      <img
        :src="image"
        class="radius-10 mb-24"
        alt=""
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import $ from "jquery";
import "slick-carousel";

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
});

onMounted(() => {
  $(".house-detail-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".house-detail-slider-nav",
  });

  $(".house-detail-slider-nav").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".house-detail-slider",
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
    ],
  });
});
</script>

<style lang="scss" scoped>
.house-detail-slider img,
.house-detail-slider-nav img {
  object-fit: cover; /* Crop and fill without distortion */
  border-radius: 10px; /* Maintain your existing styling */
}

.house-detail-slider img {
  width: 100%;
  height: 100vh;
  max-height: 530px;
}

.house-detail-slider-nav img {
  height: 20vh;
  max-height: 120px;
  width: 94%;
}

.house-detail-slider-nav .item {
    margin: 0 12px;
}
</style>
