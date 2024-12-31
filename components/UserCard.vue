<template>
  <div
    class="testimonial-block"
    data-slick-index="2"
    aria-hidden="false"
    tabindex="0"
  >
    <img src="/Public/Themes/jonikinsTheme/Assets/media/testimonial/img-3.png" class="w-100" alt="" />
    <div class="data">
        <div class="user-img">
        <img src="/Public/Themes/jonikinsTheme/Assets/media/user/img-3.png" alt="" />
        </div>
        <h6 class="name">Ava Thompson</h6>
        <p>
        "The real estate agents were incredibly responsive and helpful throughout
        the entire process. I couldn't have asked for a better experience."
        </p>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.testimonial-block {
    width: 100%;
    max-width: 348px;
}
.data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    top: -50px;
}
</style>
