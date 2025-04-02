<template>
    <div class="properties-detail">
      <div class="row mb-24">
        <div class="col-12">
          <h2 class="fw-6 fs-40 ls-1 color-dark-2 text-uppercase mb-32">
            {{ data.title }}
          </h2>
          <slider v-if="data.images !== undefined" :images="data.images"></slider>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-4">
          <div class="contact mb-24">
            <h2 class="fw-5 fs-23 color-dark-2 font-sec mb-16">Schedule Visit</h2>
            <book-inspection :data="data"></book-inspection>
          </div>
          <div class="col-xl-12">
            <div class="detail bg-gray radius-10 mb-24 text-center pt-32">
              <img src="assets/media/user/img-2.png" class="mb-8" alt="" />
              <h5 class="fw-5 fs-23 color-dark-2 font-sec mb-8">
                <get-fullname :id="data.owner_id"></get-fullname>
              </h5>
              <p class="fw-5 fs-16 ls-2 color-gray-4 font-sec mb-15">
                Real Estate Broker
              </p>
              <ul class="social-icon list-unstyled st-2">
                <li>
                  <a href=""><i class="fab fa-facebook-f"></i></a>
                </li>
                <li>
                  <a href=""><i class="fab fa-instagram"></i></a>
                </li>
                <li>
                  <a href=""><i class="fab fa-youtube"></i></a>
                </li>
                <li>
                  <a href=""><i class="fal fa-basketball-ball"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-xl-8">
          <div class="house-detail">
            <h2 class="st-2">Details</h2>
            <ul class="list-unstyled">
              <li><img :src="bed" alt="" />{{ data.rooms }} Bed Rooms</li>
              <li><img :src="tooms" alt="" />{{ data.bathrooms }} Bath Rooms</li>
              <li><img :src="scale" alt="" />{{ data.size }} sq. ft.</li>
              <li v-if="authStore.hasAccess([12])">
                  <router-link
                    :to="`/property/edit/${route.params.id}`"
                    class="btn btn-primary"
                    >Edit Property</router-link
                  >
              </li>
              <!-- <li><img src="assets/media/icon/garage.png" alt="" />Garages</li>
              <li><img src="assets/media/icon/home.png" alt="" />Type House</li> -->
            </ul>
          </div>
          <div class="house-detail">
            <h2 class="mb-16">Overview</h2>
            <p class="mb-0" v-html="data.description"></p>
          </div>
          <div class="house-detail">
            <h2 class="mb-16">Location</h2>
            <span class="mb-16">{{ data.location }}</span>
            <!-- <div class="map-responsive">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.6395364528967!2d-122.08626633780452!3d37.421994070413874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425dad8f%3A0x6c296c66619367e0!2sGoogleplex!5e0!3m2!1sen!2ske!4v1585314748051!5m2!1sen!2ske"
                height="300"
                style="border: 0"
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </div> -->
          </div>
          <!-- <div class="house-detail">
            <h2 class="mb-16">Floor Plans</h2>
            <div class="row" id="faqExample">
              <div class="col-12">
                <div class="text-block bg-white-1 radius-10 mb-16">
                  <button
                    class="accordion-button collapsed fw-6 fs-25 font-sec color-dark-2 lh-130"
                    data-bs-toggle="collapse"
                    data-bs-target="#slide1"
                    aria-expanded="true"
                    aria-controls="slide1"
                  >
                    <span class="st-1"
                      ><i class="fal fa-angle-down"></i> First Floor</span
                    >
                    <samp
                      class="d-flex align-items-center justify-content-between"
                    >
                      <span>Rooms: 2</span>
                      <span>Baths: 2</span>
                      <span>Size: 200 sq. ft.</span>
                    </samp>
                  </button>
                  <div
                    id="slide1"
                    class="accordion-collapse collapse"
                    aria-labelledby="slide1"
                    data-bs-parent="#faqExample"
                  >
                    <img src="assets/media/about/blue-print.png" alt="" />
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="text-block bg-white-1 radius-10 mb-16">
                  <button
                    class="accordion-button collapsed fw-6 fs-25 font-sec color-dark-2 lh-130"
                    data-bs-toggle="collapse"
                    data-bs-target="#slide2"
                    aria-expanded="true"
                    aria-controls="slide2"
                  >
                    <span class="st-1"
                      ><i class="fal fa-angle-down"></i> Second Floor</span
                    >
                    <samp
                      class="d-flex align-items-center justify-content-between"
                    >
                      <span>Rooms: 2</span>
                      <span>Baths: 2</span>
                      <span>Size: 200 sq. ft.</span>
                    </samp>
                  </button>
                  <div
                    id="slide2"
                    class="accordion-collapse collapse"
                    aria-labelledby="slide2"
                    data-bs-parent="#faqExample"
                  >
                    <img src="assets/media/about/blue-print.png" alt="" />
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="text-block bg-white-1 radius-10 mb-0">
                  <button
                    class="accordion-button collapsed fw-6 fs-25 font-sec color-dark-2 lh-130"
                    data-bs-toggle="collapse"
                    data-bs-target="#slide3"
                    aria-expanded="true"
                    aria-controls="slide3"
                  >
                    <span class="st-1"
                      ><i class="fal fa-angle-down"></i> Third Floor</span
                    >
                    <samp
                      class="d-flex align-items-center justify-content-between"
                    >
                      <span>Rooms: 2</span>
                      <span>Baths: 2</span>
                      <span>Size: 200 sq. ft.</span>
                    </samp>
                  </button>
                  <div
                    id="slide3"
                    class="accordion-collapse collapse"
                    aria-labelledby="slide3"
                    data-bs-parent="#faqExample"
                  >
                    <img src="assets/media/about/blue-print.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="house-detail">
            <h2 class="mb-16">video</h2>
            <div class="video" id="vid">
              <div class="img-box">
                <img
                  class="detail-image"
                  src="assets/media/about/img-3.png"
                  alt=""
                />
                <div class="overlay">
                  <a href="#vid" class="play-btn"><i class="fas fa-play"></i></a>
                </div>
              </div>
              <div class="video-box">
                <video controls="">
                  <source src="../../../v/oceans.mp4?HD" type="video/mp4" />
                </video>
              </div>
            </div>
          </div> -->
          <reviews v-if="data.id !== undefined" :content-id="data.id" content-type="property"></reviews>
          <review-form v-if="data.id !== undefined" :content-id="data.id" content-type="property"></review-form>
        </div>
      </div>
      <view-hook :content-id="data.id" content-type="property"></view-hook>
    </div>
  </template>
  
  <script setup>
  import Slider from "@module/propertyListing/components/Slider.vue";
  import BookInspection from "@module/propertyListing/components/BookInspection.vue";
  import { computed } from "vue";
  import { usePropertiesStore } from "@module/propertyListing/store/properties";
  import { useRoute } from "vue-router";
  import GetFullname from "@theme/GetFullname.vue";
  import bed from "@module/propertyListing/assets/icon/bed.png";
  import tooms from "@module/propertyListing/assets/icon/toom.png";
  import scale from "@module/propertyListing/assets/icon/scale.png";
  import { useAuthStore } from '@/store/auth';
  import ViewHook from "@module/propertyListing/components/ViewHook.vue";
  import ReviewForm from "@module/propertyListing/components/ReviewForm.vue";
  import Reviews from "@module/propertyListing/components/Reviews.vue";
  import { EvoUId } from '@/helpers'
  
  const propertiesStore = usePropertiesStore();
  const authStore = useAuthStore();
  const route = useRoute();
  const evouid = new EvoUId()
  
  const data = computed(
    () => propertiesStore.get({ id: evouid.decode(route.params.id) })[0] ?? {}
  );
  </script>
  
  <style lang="scss" scoped></style>
  