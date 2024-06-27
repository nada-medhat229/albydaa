<template>
  <section class="container text-center">
    <div class=" md:pb-32 pb-[4.5rem]">
    <h1 class="lg:text-6xl text-3xl font-bold text-[#10526B] md:pb-12 pb-5">
      مقالات البيضاء
    </h1>

    <section class="relative">
      <div class="absolute flex justify-between w-full top-[45%]">
        <button @click="prev" class="nav-button left">
          <img src="/rightarrow.png" class="lg:w-16 lg:h-16 md:w-12 md:h-12 w-9 h-9" alt="">
        </button>
        <button @click="next" class="nav-button right">
          <img src="/leftarrow.png" class="lg:w-16 lg:h-16 md:w-12 md:h-12 w-9 h-9" alt="">

        </button>
      </div>
      <div id="carousel">
        <div id="slider">
          <input
            type="radio"
            v-for="(slide, index) in slides"
            :key="index"
            :id="`s${index + 1}`"
            name="slider"
            :checked="index === currentSlide"
            @change="setCurrentSlide(index)"
          />
          <label
            v-for="(slide, index) in slides"
            :key="index"
            :for="`s${index + 1}`"
            :id="`slide${index + 1}`"
          >
            <img :src="slide.src" alt="" />
            <p class="md:p-4 p-3 bg-[#10526B] text-white relative mt-[-24px] z-[55] rounded-t-[0]  rounded-b-[12px] lg:text-3xl sm:text-base textslide">{{ slide.text }}</p>
          </label>
        </div>
      </div>
    </section>
  </div>
  <button class="btn-main my-1" >
    تصفح المزيد
</button>
  </section>

</template>

<script setup>
import { ref } from "vue";
const slides = ref([
  {src:"/arcimg.png",text:"الأديان والفلسفة الشرقية"},
  {src:"/arcimg.png",text:"ا2ة"},
  {src:"/arcimg.png",text:"ا3ة"},
  {src:"/arcimg.png",text:"ا4ة"},
  {src:"/arcimg.png",text:"ا5ة "},

]);

const currentSlide = ref(1); // Start with the third slide (index 2)
const next = () => {
  currentSlide.value =
    (currentSlide.value - 1 + slides.value.length) % slides.value.length;
};

const prev = () => {
  currentSlide.value =
    (currentSlide.value + 1 + slides.value.length) % slides.value.length;
};
const setCurrentSlide = (index) => {
  currentSlide.value = index;
};
</script>

<style scoped>
[type="radio"] {
  display: none;
}

#carousel {
  max-width: 80vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
}

.nav-button {
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
}

#slider {
  height: 20.5vw;
  width: 60%;
  position: relative;
  perspective: 1000px;
  transform-style: preserve-3d;
}

#slider label {
  margin: auto;
  width: 38vw;
  /* height: 20vw; */
  border-radius: 30px;
  position: absolute;
  left: 0;
  right: 0;
  cursor: pointer;
  transition: transform 0.4s ease;
}
#slider label img {
  border-radius: 30px;
}
#s1:checked ~ #slide4,
#s2:checked ~ #slide5,
#s3:checked ~ #slide1,
#s4:checked ~ #slide2,
#s5:checked ~ #slide3 {
  /* box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37); */
  transform: translate3d(-50%, 0, -200px);
}

#s1:checked ~ #slide5,
#s2:checked ~ #slide1,
#s3:checked ~ #slide2,
#s4:checked ~ #slide3,
#s5:checked ~ #slide4 {
  /* box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3), 0 2px 2px 0 rgba(0, 0, 0, 0.2); */
  transform: translate3d(-50%, 0, -200px);
}

#s1:checked ~ #slide1,
#s2:checked ~ #slide2,
#s3:checked ~ #slide3,
#s4:checked ~ #slide4,
#s5:checked ~ #slide5 {
  /* box-shadow: 0 13px 25px 0 rgba(0, 0, 0, 0.3), 0 11px 7px 0 rgba(0, 0, 0, 0.19); */
  transform: translate3d(0, 0, 0);
}

#s1:checked ~ #slide2,
#s2:checked ~ #slide3,
#s3:checked ~ #slide4,
#s4:checked ~ #slide5,
#s5:checked ~ #slide1 {
  /* box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3), 0 2px 2px 0 rgba(0, 0, 0, 0.2); */
  transform: translate3d(50%, 0, -200px);
}

#s1:checked ~ #slide3,
#s2:checked ~ #slide4,
#s3:checked ~ #slide5,
#s4:checked ~ #slide1,
#s5:checked ~ #slide2 {
  /* box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37); */
  transform: translate3d(50%, 0, -200px);
}
.btn-main{
  width: 250px;
  font-size: 24px;
  height: 60px;

}
@media (max-width: 992px) {
  #slider label img {
    border-radius: 14px;
}
.btn-main{
  width: 190px;
  font-size: 18px;
  height: 40px;
  border-radius: 12px;

}
}
@media (max-width: 576px) {
  #slider label {
    width: 47vw;
  }
  #slider label img {
    border-radius: 12px;
}

}
@media (max-width: 450px) {
  .textslide {
    font-size: 12px;
    padding: 10px;
  }
}

</style>
