<template>
    <section class="container pb-[12rem] partbook">
      <div class="xl:p-16 p-10 md:pb-10 pb-24 bg-[#c7e0dcc7] rounded-xl flex md:flex-row flex-col  lg:justify-around justify-between">
        <div class="md:w-6/12 w-100">
          <h1 class="xl:text-6xl md:text-5xl text-4xl font-bold text-[#10526B] pb-4">
            معجم المصطلحات
          </h1>
          <p class="lg:text-3xl text-2xl font-semibold text-[#10526B] leading-[3rem] md:pb-0">
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
            النص من مولد النص العربى، حيث
          </p>
        </div>
        <div class="md:w-5/12 w-100 relative">
          <div class="absolute w-full">
            
            <Swiper
              :slidesPerView="1"
              loop
              class="mySwiper"
              :modules="[Navigation]" navigation
            >
              <SwiperSlide v-for="(slide, index) in slides" :key="index" class="text-center">
                <img :src="slide.value" alt="Slide image" class="lg:w-70 lg:h-80 md:w-60 md:h-70 w-40 h-50 m-auto" />
                <button class="btn-main ">{{ slide.button }}</button>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import "swiper/css";
  import "swiper/css/navigation";
  import { Swiper, SwiperSlide } from "swiper/vue";
  import { Navigation } from "swiper/modules";
  const slides = ref([
    { value: "/book.png", button: "اطلب الآن" },
    { value: "/book.png", button: "اطلب الآن" },
    { value: "/book.png", button: "اطلب الآن" },
    { value: "/book.png", button: "اطلب الآن" },
  ]);
  
  </script>
  
  <style >
  .partbook .swiper-button-next ,
  .partbook .swiper-button-prev {
    color: #10526B;
  }
  .partbook .swiper-button-prev,
  .partbook .swiper-button-prev:after {
    display: none;
  }
  .partbook .swiper-button-prev,.partbook .swiper-rtl .swiper-button-next {
      left: 12%;
      right: auto;
  }
  .partbook .swiper-button-next:after {
      font-size: 35px;
      line-height: 0;
      font-weight: 600;
  }
  @media (max-width: 1400px) {
    .partbook .swiper-button-prev,.partbook .swiper-rtl .swiper-button-next {
      left: 10%;
      right: auto;
  }}
  @media (max-width: 992px) {
    .partbook .swiper-button-prev,.partbook .swiper-rtl .swiper-button-next {
      left: 0;
      right: auto;
  }}
  </style>
  <style scoped>
  .btn-main{
    width: 240px;
      margin-top: 15px;
      font-size: 24px;
      height: 50px;
      border-radius: 8px;
      margin-right: 6px;
  }
  @media (max-width: 750px) {
    .btn-main{
    width: 150px;
      font-size: 20px;
      height: 35px;
  }
  }
  </style>
  