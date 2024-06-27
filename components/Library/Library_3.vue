<template>
    <section class="container my-24">
      <div class="grid grid-cols-1 lg:grid-cols-3 pt-28 gap-12 mb-12">
        <div class="mb-16" v-for="(item, i) in items" :key="i">
          <nuxt-link to="/library/onebook" class="block p-3">
            <div class="bg-[#c7e0dcc7] p-4 rounded-lg relative">
              <img
                :src="item.image"
                alt="Book Image"
                class="w-full h-auto rounded-md mt-[-110px]"
              />
              <div
                class="absolute md:bottom-5 md:top-[auto] top-[-20px] md:right-[-20px] bg-[#9FCA94] rounded p-2"
              >
                <img src="/shoppingcarts.png" alt="Icon" class="w-8 h-8" />
              </div>
            </div>
            <div class="bg-[#10526B] mt-5 text-2xl text-white text-center py-2 rounded-md">
              {{ item.text }}
            </div>
          </nuxt-link>
        </div>
      </div>
      <div class="flex justify-center">
        <button @click="addMoreItems">
         <img src="/public/addsquare.png" class="w-[4.5rem]">
        </button>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
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
  
  const items = ref([...initialItems]);
  
  function addMoreItems() {
    const newItems = [
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
    items.value.push(...newItems);
  }
  </script>
  
  <style scoped>
  /* Additional styles if needed */
  </style>
  