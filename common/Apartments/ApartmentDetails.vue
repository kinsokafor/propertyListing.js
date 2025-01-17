<template>
  <div class="properties-detail">
    <div class="row mb-24">
      <div class="col-12">
        <h2 class="fw-6 fs-40 ls-1 color-dark-2 text-uppercase mb-32">
          {{ data.name }}
        </h2>
        <slider v-if="data.images !== undefined" :images="data.images"></slider>
      </div>
    </div>
    <div class="row">
      <div class="col-xl-4">
        <div class="contact mb-24">
            <h2 class="fw-5 fs-23 color-dark-2 font-sec mb-16">Book Apartment</h2>
            <book-apartment></book-apartment>
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
            <li><img src="assets/media/icon/bed.png" alt="" />2 Bed Rooms</li>
            <li><img src="assets/media/icon/toom.png" alt="" />2 Bath Rooms</li>
            <li><img src="assets/media/icon/scale.png" alt="" />200 sq. ft.</li>
            <li>
              <img src="assets/media/icon/brick-wall.png" alt="" />Year Build
              2014
            </li>
            <li><img src="assets/media/icon/garage.png" alt="" />Garages</li>
            <li><img src="assets/media/icon/home.png" alt="" />Type House</li>
          </ul>
        </div>
        <div class="house-detail">
          <h2 class="mb-16">Overview</h2>
          <p class="mb-0" v-html="data.description">
          </p>
        </div>
        <div class="house-detail">
          <h2 class="mb-16">Location</h2>
          <span class="mb-16">{{data.location}}</span>
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
        <div class="house-detail">
          <h2 class="mb-16">(3 Reviews)</h2>
          <div class="review border-0 mb-32">
            <div
              class="d-flex align-items-center justify-content-between mb-16"
            >
              <div class="user">
                <img src="assets/media/user/img-8.png" alt="" />
                <div class="content">
                  <h4>Sarah M</h4>
                  <p>May 10, 2023</p>
                </div>
              </div>
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
            </div>
            <p>
              "My family and I have been living in Forest Heights Homes for the
              past 2 years and we absolutely love it here. The community is safe
              and welcoming, and the amenities are top-notch. The management
              team is also very responsive and helpful."
            </p>
          </div>
          <div class="review border-0 mb-32">
            <div
              class="d-flex align-items-center justify-content-between mb-16"
            >
              <div class="user">
                <img src="assets/media/user/img-9.png" alt="" />
                <div class="content">
                  <h4>John D</h4>
                  <p>May 12, 2023</p>
                </div>
              </div>
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
            </div>
            <p>
              "I had a great experience renting a home in Forest Heights. The
              property was well-maintained, and the leasing process was easy and
              straightforward. I highly recommend Forest Heights Homes for
              anyone looking for a comfortable and convenient place to live."
            </p>
          </div>
          <div class="review border-0 mb-0">
            <div
              class="d-flex align-items-center justify-content-between mb-16"
            >
              <div class="user">
                <img src="assets/media/user/img-10.png" alt="" />
                <div class="content">
                  <h4>Emily P</h4>
                  <p>May 14, 2023</p>
                </div>
              </div>
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
            </div>
            <p class="mb-0">
              "I recently purchased a home in Forest Heights and couldn't be
              happier with my decision. The community is peaceful, the homes are
              beautiful, and the location is unbeatable. Highly recommend!"
            </p>
          </div>
        </div>
        <div class="house-detail">
          <h2>add a Review</h2>
          <div class="d-flex align-items-center">
            <div class="user">
              <h6 class="pe-3">Rating</h6>
            </div>
            <div class="form-group">
              <fieldset>
                <span class="star-cb-group">
                  <input
                    type="radio"
                    id="rating-5"
                    name="rating"
                    value="5"
                  /><label for="rating-5">5</label>
                  <input
                    type="radio"
                    id="rating-4"
                    name="rating"
                    value="4"
                  /><label for="rating-4">4</label>
                  <input
                    type="radio"
                    id="rating-3"
                    name="rating"
                    value="3"
                  /><label for="rating-3">3</label>
                  <input
                    type="radio"
                    id="rating-2"
                    name="rating"
                    value="2"
                  /><label for="rating-2">2</label>
                  <input
                    type="radio"
                    id="rating-1"
                    name="rating"
                    value="1"
                    checked="checked"
                  /><label for="rating-1">1</label>
                  <input
                    type="radio"
                    id="rating-0"
                    name="rating"
                    value="0"
                    class="star-cb-clear"
                  /><label for="rating-0">0</label>
                </span>
              </fieldset>
            </div>
          </div>
          <form
            method="post"
            action="./properties-detail.html"
            class="rev-form"
          >
            <div class="row">
              <div class="col-lg-6 col-12">
                <div class="form-group mb-16">
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    name="name"
                    required=""
                    placeholder="Your Name"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-12">
                <div class="form-group mb-16">
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    name="email"
                    required=""
                    placeholder="Your Email"
                  />
                </div>
              </div>

              <div class="col-12">
                <div class="formGroup mb-16">
                  <input type="checkbox" id="keepcheck" />
                  <label for="keepcheck"
                    >Keep me posted via email for future comments on this
                    website.</label
                  >
                </div>
              </div>
              <div class="col-12">
                <div class="form-group mb-16">
                  <textarea
                    class="form-control"
                    required=""
                    name="message"
                    placeholder="Review"
                  ></textarea>
                </div>
              </div>
            </div>
            <button type="submit" class="form-btn">Submit Review</button>
            <!-- Alert Message -->
            <div id="message" class="alert-msg"></div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Slider from "@module/propertyListing/components/Slider.vue";
import BookApartment from "@module/propertyListing/components/BookApartment.vue";
import { computed } from "vue";
import { useApartmentsStore } from "@module/propertyListing/store/apartments";
import { useRoute } from "vue-router";
import GetFullname from '@theme/GetFullname.vue'

const apartmentsStore = useApartmentsStore();
const route = useRoute();

const data = computed(
  () => apartmentsStore.get({ id: route.params.id })[0] ?? {}
);
</script>

<style lang="scss" scoped></style>
