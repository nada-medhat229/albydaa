<template>
  <section class="container">
    <div class="md:m-16">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        <nuxt-link :to="btn.link" v-for="(btn, i) in Collapsebutton"
          :key="i"
          class="w-full text-center p-2 text-lg rounded-xl focus:outline-none hover:bg-[#10526B] hover:text-white hover:font-medium font-semibold bg-[#c7e0dcc7] text-[#10526B] cursor-pointer	">
          {{ btn.name }}
        </nuxt-link>
      </div>
    </div>
      <div class="flex items-center my-28">
        <div class="flex-grow border-t border-[#10526B]"></div>
        <span class="px-4 md:text-xl text-lg font-bold text-[#10526B]"
          >المخرجات </span
        >
        <div class="flex-grow border-t border-[#10526B]"></div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div class="mb-16 cardstyle" v-for="(item, i) in initialItems" :key="i">
          <nuxt-link to="/library/onebook" class="block p-3">
            <div class="bg-[#C7E0DCC7] p-4 rounded-lg relative">
              <img
                :src="item.image"
                alt="Book Image"
                class="w-full h-auto rounded-md lg:mt-[-110px] md:mt-[-50px] mt-[-110px]"
              />
            
            </div>
            <div
              class="bg-[#BEAE73] mt-5 lg:text-2xl text-base text-white text-center py-2 rounded-md"
            >
              {{ item.text }}
            </div>
          </nuxt-link>
        </div>
      </div>
  </section>
</template>

<script setup>
const initialItems = [
  {
    text: "حركة العصر الجديد",
    image: "/bookthreed.png",
    auth: "د. هيفاء بنت ناصر الرشيد",
  },
  {
    text: "حركة العصر الجديد",
    image: "/bookthreed.png",
    auth: "د. هيفاء بنت ناصر الرشيد",
  },
  {
    text: "حركة العصر الجديد",
    image: "/bookthreed.png",
    auth: "د. هيفاء بنت ناصر الرشيد",
  },
];
const Collapsebutton = [
  {
    name: "الدورة الاولي",
    link:'/service/numperiod'
  },
  {
    name: "الدورة الثانيه",
    link:'/service/numperiod'
  },
  {
    name: "الدورة الثالثه",
    link:'/service/numperiod'
  },
];
</script>

<style scoped>
/* Additional styles if needed */
</style>
