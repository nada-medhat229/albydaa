<!-- components/SwiperCarousel.vue -->
<template>
    <div class="py-9">
      <section class="md:flex inline items-center">
        <div class="lg:mr-24 md:mr-18 mr-5 md:w-4/12 ">
            <h1 class=" lg:text-6xl text-4xl font-bold text-[#10526B] pb-4">
            تعليقـــــات 
        </h1>
            <p class="xl:text-justify text-start text-xl font-semibold text-[#9B9E9E]  textwidth  leading-10 md:pb-0 pb-3">
                أحـــــــــدث التـعــــــــــلـيـقـــــــات  لـلـدكتورة: 
                <br>
هيفــاء بنت نــاصر الرشيد
            </p>
            <img src="dot.png" class="w-6 h-6 my-2" alt="">
        </div>
        
        <div class="md:w-8/12 md:mx-0 mx-2">
            <Swiper
          :slidesPerView="2"
          :spaceBetween="20"
          :loop="true"
          :pagination="{ clickable: true }"
          :breakpoints="{
            576: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            }
          }"
          
          class="mySwiper "
        >
          <SwiperSlide v-for="(slide, index) in slides" :key="index">
            <img :src="slide" alt="Slide image" />
          </SwiperSlide>
        </Swiper>
        </div>
         
      </section>
    
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { Swiper, SwiperSlide } from "swiper/vue";
  import {  Pagination } from "swiper/modules";
  
  const slides = ref([
    "/commentimg.png",
    "/commentimage.png",
    "/arcimg.png",
    "/commentimg.png",
    "/commentimage.png",  
  ]);
  </script>
  
  <style scoped>
  
  
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .swiper-slide {
    width: 60%;
  }
  .swiper-slide img {
    border-radius: 30px;
}
@media (min-width: 1282px) {
    .textwidth{
        width: 16vw;
    }
}

@media (min-width: 1400px) {
    .textwidth{
        width: 13.5vw;

    }
}
@media (max-width: 600px) {
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 180px;
    object-fit: fill;
}
}
  </style>
  