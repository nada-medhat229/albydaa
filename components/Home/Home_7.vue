<template>
  <section
    class="container bg-[url('/slide.png')] bg-center rounded-2xl slidetext"
  >
    <Swiper
      :slidesPerView="1"
      loop
      class="mySwiper"
      :modules="[Navigation]"
      navigation
    >
      <SwiperSlide v-for="(slide, index) in slides" :key="index">
        <div class="md:pt-40 md:p-28 pt-20 p-6 ">
          <h1
            class="xl:text-6xl py-2 lg:text-5xl text-4xl font-semibold text-white"
          >
            {{ slide.title }}
          </h1>
          <p class="md:leading-[3rem] leading-[2rem] md:text-2xl text-xl py-2 text-white ">
            {{ slide.text }}
          </p>
          <p class="text-2xl pt-5 text-white text-end">
            {{ slide.auth }}
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script setup>
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
const slides = ref([
  {
    title: "قالو عن البيضاء",
    text: "قد سعدت بما رأيته من جهود مباركة تبذلها مؤسسة البيضاء في الذب عن عقيدة الإسلام وحماية بيضة مجتمع التوحيد والسنة، وكان على رأس هذه الجهود المباركة الدورة العلمية الثانية التي رأيتها متميزة أسأل الله الكريم أن يبارك هذه الجهود ويجعلها خالصة لوجهه الكري",
    auth: "د . خالد الخطيب",
  },
  {
    title: "قالو عن البيضاء",
    text: "قد سعدت بما رأيته من جهود مباركة تبذلها مؤسسة البيضاء في الذب عن عقيدة الإسلام وحماية بيضة مجتمع التوحيد والسنة، وكان على رأس هذه الجهود المباركة الدورة العلمية الثانية التي رأيتها متميزة أسأل الله الكريم أن يبارك هذه الجهود ويجعلها خالصة لوجهه الكري",
    auth: "د . خالد الخطيب",
  },
  {
    title: "قالو عن البيضاء",
    text: "قد سعدت بما رأيته من جهود مباركة تبذلها مؤسسة البيضاء في الذب عن عقيدة الإسلام وحماية بيضة مجتمع التوحيد والسنة، وكان على رأس هذه الجهود المباركة الدورة العلمية الثانية التي رأيتها متميزة أسأل الله الكريم أن يبارك هذه الجهود ويجعلها خالصة لوجهه الكري",
    auth: "د . خالد الخطيب",
  },
]);
</script>
<style>
.slidetext .swiper-button-next {
  left: 50px;
  top: 100px;
  right: auto;
  color: #fff;
}
.slidetext .swiper-button-next:after {
      font-size: 35px;
      line-height: 0;
      font-weight: 600;
  }
  .slidetext .swiper-button-prev,
  .slidetext .swiper-button-prev:after {
    display: none;
  }
  @media (max-width: 556px) {
    .slidetext .swiper-button-next {
    top: 50px;
}
  }
</style>
