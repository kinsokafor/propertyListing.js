<template>
  <div class="sidebar bg-gray mb-24">
    <div class="row">
      <div class="col-xl-12 col-lg-12">
        <div class="row">
          <div class="col-xl-12 col-lg-6">
            <h2 class="title">City</h2>
            <div class="wrapper-dropdown" id="dropdown3">
              <span class="selected-display fw-700" id="destination3"
                >Select Deal</span
              >
              <svg
                id="drp-arrow3"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M19.7337 4.8117C19.3788 4.45673 18.8031 4.45667 18.4481 4.81176L10.0002 13.2598L1.55191 4.8117C1.19694 4.45673 0.621303 4.45667 0.266273 4.81176C-0.0887576 5.16679 -0.0887576 5.74237 0.266273 6.0974L9.35742 15.1883C9.52791 15.3588 9.75912 15.4545 10.0002 15.4545C10.2413 15.4545 10.4726 15.3587 10.643 15.1882L19.7337 6.09734C20.0888 5.74237 20.0888 5.16673 19.7337 4.8117Z"
                  fill="#92949F"
                ></path>
              </svg>
              <ul class="topbar-dropdown">
                <li class="item dark-black">New York City, NY</li>
                <li class="item dark-black">Chicago, IL</li>
                <li class="item dark-black">Houston, TX</li>
                <li class="item dark-black">San Diego, CA</li>
                <li class="item dark-black">Dallas, TX</li>
                <li class="item dark-black">Phoenix, AZ</li>
              </ul>
            </div>
          </div>
          <div class="col-xl-12 col-lg-6">
            <h2 class="title">Property Category</h2>
            <div class="wrapper-dropdown" id="dropdown3">
              <span class="selected-display fw-700" id="destination3"
                >Select Deal</span
              >
              <svg
                id="drp-arrow3"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M19.7337 4.8117C19.3788 4.45673 18.8031 4.45667 18.4481 4.81176L10.0002 13.2598L1.55191 4.8117C1.19694 4.45673 0.621303 4.45667 0.266273 4.81176C-0.0887576 5.16679 -0.0887576 5.74237 0.266273 6.0974L9.35742 15.1883C9.52791 15.3588 9.75912 15.4545 10.0002 15.4545C10.2413 15.4545 10.4726 15.3587 10.643 15.1882L19.7337 6.09734C20.0888 5.74237 20.0888 5.16673 19.7337 4.8117Z"
                  fill="#92949F"
                ></path>
              </svg>
              <ul class="topbar-dropdown">
                <li class="item dark-black">House</li>
                <li class="item dark-black">Apartment</li>
                <li class="item dark-black">Townhome</li>
                <li class="item dark-black">Office</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-12 col-lg-12">
        <div class="row">
          <div class="col-xl-12 col-lg-6 mb-16">
            <h2 class="title">Number of Bedroom's</h2>
            <ul class="list-unstyled">
              <li>
                <div class="form-group">
                  <input type="checkbox" id="room1" />
                  <label for="room1">Room 1</label>
                </div>
              </li>
              <li>
                <div class="form-group">
                  <input type="checkbox" id="room2" />
                  <label for="room2">Room 2</label>
                </div>
              </li>
              <li>
                <div class="form-group">
                  <input type="checkbox" id="room3" />
                  <label for="room3">Room 3</label>
                </div>
              </li>
              <li>
                <div class="form-group">
                  <input type="checkbox" id="room4" />
                  <label for="room4">Room 4</label>
                </div>
              </li>
              <li>
                <div class="form-group">
                  <input type="checkbox" id="room5" />
                  <label for="room5">Room 5</label>
                </div>
              </li>
              <li>
                <div class="form-group">
                  <input type="checkbox" id="room6" />
                  <label for="room6">Room 6</label>
                </div>
              </li>
            </ul>
          </div>
          <div class="col-xl-12 col-lg-6 mb-16">
            <h2 class="title">Number of Bathrooms</h2>
            <ul class="list-unstyled st-2">
              <li>
                <div class="form-group">
                  <input type="checkbox" id="bathrooms1" />
                  <label for="bathrooms1">Bathroom 1</label>
                </div>
              </li>
              <li>
                <div class="form-group">
                  <input type="checkbox" id="bathrooms2" />
                  <label for="bathrooms2">Bathroom 2</label>
                </div>
              </li>
              <li>
                <div class="form-group">
                  <input type="checkbox" id="bathrooms3" />
                  <label for="bathrooms3">Bathroom 3</label>
                </div>
              </li>
              <li>
                <div class="form-group">
                  <input type="checkbox" id="bathrooms4" />
                  <label for="bathrooms4">Bathroom 4</label>
                </div>
              </li>
              <li>
                <div class="form-group">
                  <input type="checkbox" id="bathrooms5" />
                  <label for="bathrooms5">Bathroom 5</label>
                </div>
              </li>
              <li>
                <div class="form-group">
                  <input type="checkbox" id="bathrooms6" />
                  <label for="bathrooms6">Bathroom 6</label>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-xl-12 col-lg-12">
        <div class="row">
          <div class="col-xl-12 col-lg-6">
            <h2 class="title">Square Feet</h2>
            <div class="slider-track mb-24">
              <span class="irs irs--big js-irs-0"
                ><span class="irs"
                  ><span class="irs-line" tabindex="0"></span
                  ><span class="irs-min" style="display: none">0</span
                  ><span class="irs-max" style="display: none">1</span
                  ><span class="irs-from" style="display: none; left: 0%"
                    >0</span
                  ><span class="irs-to" style="display: none; left: 0%">0</span
                  ><span class="irs-single" style="display: none; left: 0%"
                    >0</span
                  ></span
                ><span class="irs-grid"></span
                ><span
                  class="irs-bar"
                  style="left: 23.719%; width: 52.562%"
                ></span
                ><span
                  class="irs-shadow shadow-from"
                  style="display: none"
                ></span
                ><span class="irs-shadow shadow-to" style="display: none"></span
                ><span class="irs-handle from" style="left: 17.5207%"
                  ><i></i><i></i><i></i></span
                ><span class="irs-handle to type_last" style="left: 70.0826%"
                  ><i></i><i></i><i></i></span></span
              ><input
                type="text"
                class="js-slider form-control irs-hidden-input"
                value="0"
                tabindex="-1"
                readonly=""
              />
              <p>300 sq. ft. - 1000 sq. ft.</p>
            </div>
          </div>
          <div class="col-xl-12 col-lg-6">
            <h2 class="title">Price</h2>
            <div class="slider-track">
              <span class="irs irs--big js-irs-1"
                ><span class="irs"
                  ><span class="irs-line" tabindex="0"></span
                  ><span class="irs-min" style="display: none">0</span
                  ><span class="irs-max" style="display: none">1</span
                  ><span class="irs-from" style="display: none; left: 0%"
                    >0</span
                  ><span class="irs-to" style="display: none; left: 0%">0</span
                  ><span class="irs-single" style="display: none; left: 0%"
                    >0</span
                  ></span
                ><span class="irs-grid"></span
                ><span
                  class="irs-bar"
                  style="left: 23.719%; width: 52.562%"
                ></span
                ><span
                  class="irs-shadow shadow-from"
                  style="display: none"
                ></span
                ><span class="irs-shadow shadow-to" style="display: none"></span
                ><span class="irs-handle from" style="left: 17.5207%"
                  ><i></i><i></i><i></i></span
                ><span class="irs-handle to type_last" style="left: 70.0826%"
                  ><i></i><i></i><i></i></span></span
              ><input
                type="text"
                class="js-slider form-control irs-hidden-input"
                value="0"
                tabindex="-1"
                readonly=""
              />
              <p>Range: $1000 - 10,000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { nextTick } from "vue";

const dropdown = function () {
  const selectedAll = document.querySelectorAll(".wrapper-dropdown");

  selectedAll.forEach((selected) => {
    const optionsContainer = selected.children[2];
    const optionsList = selected.querySelectorAll("div.wrapper-dropdown li");

    selected.addEventListener("click", () => {
      let arrow = selected.children[1];

      if (selected.classList.contains("active")) {
        handleDropdown(selected, arrow, false);
      } else {
        let currentActive = document.querySelector(".wrapper-dropdown.active");

        if (currentActive) {
          let anotherArrow = currentActive.children[1];
          handleDropdown(currentActive, anotherArrow, false);
        }

        handleDropdown(selected, arrow, true);
      }
    });

    // update the display of the dropdown
    for (let o of optionsList) {
      o.addEventListener("click", () => {
        selected.querySelector(".selected-display").innerHTML = o.innerHTML;
      });
    }
  });

  // check if anything else ofther than the dropdown is clicked
  window.addEventListener("click", function (e) {
    if (e.target.closest(".wrapper-dropdown") === null) {
      closeAllDropdowns();
    }
  });

  // close all the dropdowns
  function closeAllDropdowns() {
    const selectedAll = document.querySelectorAll(".wrapper-dropdown");
    selectedAll.forEach((selected) => {
      const optionsContainer = selected.children[2];
      let arrow = selected.children[1];

      handleDropdown(selected, arrow, false);
    });
  }

  // open all the dropdowns
  function handleDropdown(dropdown, arrow, open) {
    if (open) {
      arrow.classList.add("rotated");
      dropdown.classList.add("active");
    } else {
      arrow.classList.remove("rotated");
      dropdown.classList.remove("active");
    }
  }
};

nextTick(() => {
    dropdown()
})
</script>

<style lang="scss" scoped></style>
