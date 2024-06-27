<template>
    <section class="lg:mx-32 md:mx-18 mx-5 my-10">
      <div class="md:m-16">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            v-for="(btn, i) in Collapsebutton"
            :key="i"
            @click="toggleCollapse(i)"
            :class="[
              'w-full text-center p-2 text-lg rounded-xl focus:outline-none',
              isOpen === i
                ? 'bg-[#10526B] text-white font-medium'
                : 'font-semibold bg-[#c7e0dcc7] text-[#10526B]',
            ]"
          >
            {{ btn.name }}
          </button>
        </div>
        <div v-for="(btn, i) in Collapsebutton" :key="i" class="md:mt-28 mt-10">
          <div v-show="isOpen === i">
            <div class="flex items-center ">
        <div class="flex-grow border-t border-[#10526B]"></div>
        <span class="px-4 md:text-xl text-lg font-bold text-[#10526B]"
          >السلاسل </span
        >
        <div class="flex-grow border-t border-[#10526B]"></div>
      </div>
      <div class="text-xl py-10 text-[#10526B] font-semibold leading-10">
        {{ btn.text }}
      </div>
            <div class="grid grid-cols-1 gap-5 mb-12">
              <div class="mb-3" v-for="(items, i) in visibleItems" :key="i">

                  <div
      class="flex items-center md:flex-row flex-col bg-[#C4C4C429] sm:p-7 p-5 rounded-lg mb-4"
    >
      <div
        class="bg-[#10526B] rounded-lg sm:w-24 w-20 sm:h-20 h-16 relative mb-2 md:mt-[-80px] md:flex hidden items-center justify-center"
      >
      </div>
      <div class="flex-grow sm:pr-5">
        <h2 class="text-2xl text-[#10526B] font-bold md:mb-3">
         {{ items.text }}
        </h2>
        <p class="text-xl text-[#9B9E9E] mb-3">
          {{ items.auth }}
      
          </p>
      </div>
      <nuxt-link to="/results/singlescientific" class="block">

      <button
        @click="openModal"
        class="bg-[#BEAE73] text-white p-3 lg:mr-0 sm:mr-5 text-lg rounded-xl"
      >
      <img :src="items.image" alt="Icon" class="w-9 h-9 brightness-200	" />
      </button>
    </nuxt-link>
    </div>
       
              </div>
            </div>
       
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, computed } from "vue";
  
  const isOpen = ref(null);
  
  const Collapsebutton = [
    {
      name: "سراج الأهلة",
      text:'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى ',
      content: [
        {
          text: " سراج الأهلة : رمضان والعيد",
          image: "/eye.png",
          auth: "اعداد : مؤسسة البيضاء    ",
        },
        {
          text: " سراج الأهلة : رمضان والعيد",
          image: "/eye.png",
          auth: "اعداد : مؤسسة البيضاء    ",
        },
        {
          text: " سراج الأهلة : رمضان والعيد",
          image: "/eye.png",
          auth: "اعداد : مؤسسة البيضاء    ",
        },
        {
          text: " سراج الأهلة : رمضان والعيد",
          image: "/eye.png",
          auth: "اعداد : مؤسسة البيضاء    ",
        },
      ],
    },
    {
      name: "ابانة",
      text:'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى ',
      content: [
        {
          text: " سراج الأهلة : رمضان والعيد",
          image: "/eye.png",
          auth: "اعداد : مؤسسة البيضاء    ",
        },
        {
          text: " سراج الأهلة : رمضان والعيد",
          image: "/eye.png",
          auth: "اعداد : مؤسسة البيضاء    ",
        },
        {
          text: " سراج الأهلة : رمضان والعيد",
          image: "/eye.png",
          auth: "اعداد : مؤسسة البيضاء    ",
        },
        {
          text: " سراج الأهلة : رمضان والعيد",
          image: "/eye.png",
          auth: "اعداد : مؤسسة البيضاء    ",
        },
      ],
    },
    {
      name: "شبهات وردود",
      text:'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى ',
      content: [
        {
          text: " سراج الأهلة : رمضان والعيد",
          image: "/eye.png",
          auth: "اعداد : مؤسسة البيضاء    ",
        },
        {
          text: " سراج الأهلة : رمضان والعيد",
          image: "/eye.png",
          auth: "اعداد : مؤسسة البيضاء    ",
        },
        {
          text: " سراج الأهلة : رمضان والعيد",
          image: "/eye.png",
          auth: "اعداد : مؤسسة البيضاء    ",
        },
        {
          text: " سراج الأهلة : رمضان والعيد",
          image: "/eye.png",
          auth: "اعداد : مؤسسة البيضاء    ",
        },
      ],
    },
   
  ];
  
  function toggleCollapse(index) {
    isOpen.value = isOpen.value === index ? null : index;
    currentIndex.value = 0; // Reset the current index when a new button is opened
  }
  
  const currentIndex = ref(0);
  const visibleItems = computed(() => {
  if (isOpen.value !== null) {
  
    return Collapsebutton[isOpen.value].content;
  }
  return [];
});
  

  </script>
  
  <style scoped>
  /* Additional styles if needed */
  </style>
  