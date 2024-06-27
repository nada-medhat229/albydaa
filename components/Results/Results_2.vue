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
          >الحلقات </span
        >
        <div class="flex-grow border-t border-[#10526B]"></div>
      </div>
      <div class="text-xl py-10 text-[#10526B] font-semibold leading-10">
        {{ btn.text }}
      </div>
            <div class="grid grid-cols-1 gap-5 mb-12">
              <div v-for="(items, i) in visibleItems" :key="i" class="my-8 p-6 bg-[#c4c4c429] rounded-lg shadow-md">
                <div class="flex lg:flex-row flex-col">
          <div class="flex-shrink-0">
            <img :src="items.icon" alt="icon" class="xl:w-64 lg:w-42 w-full h-36 rounded-lg object-cover mt-[-60px]" />
          </div>
          <div class="mx-4 flex-grow ">
            <h3 class="sm:text-2xl text-xl font-semibold text-[#10526B] py-2 sm:mb-2">{{ items.title }}</h3>
            <p class="text-[#909090] sm:text-xl text-lg mb-2">
              {{ items.description }}
            </p>
          </div>
          <div class="flex flex-col justify-between lg:w-auto md:w-6/12 w-full mr-auto">
            <div class="flex justify-center items-center md:mt-[-45px] mt-0 md:mb-0 mb-2">
            <button v-for="(action, i) in actions" :key="i" class="bg-[#BEAE73] p-2 rounded-lg mx-1">
              <img :src="action.icon" alt="action icon" class="w-8 h-8 p-1 object-contain brightness-200" />
            </button>
          </div>
          <button
          class="p-2 py-3 text-xl font-semibold lg:m-2 m-1  bg-white text-[#10526B] rounded-lg"
>
            {{ items.btn }}
          </button>
          </div>
         
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
      name: "الموسم الأول ",
      content: [
        {
      title: "فلسفة الشرق الحاضرة",
      description: "اسم المتحدث",
      icon: "/athbiik.jpg",
      btn:'تفريغ الحلقة'
    },
    {
      title: "فلسفة الشرق الحاضرة",
      description: "اسم المتحدث",
      icon: "/athbiik.jpg",
      btn:'تفريغ الحلقة'
    },
    {
      title: "فلسفة الشرق الحاضرة",
      description: "اسم المتحدث",
      icon: "/athbiik.jpg",
      btn:'تفريغ الحلقة'
    },
    {
      title: "فلسفة الشرق الحاضرة",
      description: "اسم المتحدث",
      icon: "/athbiik.jpg",
      btn:'تفريغ الحلقة'
    },
      ],
    },
    {
      name: "الموسم الثاني",
      content: [
        {
      title: "فلسفة الشرق الحاضرة",
      description: "اسم المتحدث",
      icon: "/athbiik.jpg",
      btn:'تفريغ الحلقة'
    },
    {
      title: "فلسفة الشرق الحاضرة",
      description: "اسم المتحدث",
      icon: "/athbiik.jpg",
      btn:'تفريغ الحلقة'
    },
    {
      title: "فلسفة الشرق الحاضرة",
      description: "اسم المتحدث",
      icon: "/athbiik.jpg",
      btn:'تفريغ الحلقة'
    },
    {
      title: "فلسفة الشرق الحاضرة",
      description: "اسم المتحدث",
      icon: "/athbiik.jpg",
      btn:'تفريغ الحلقة'
    },
      ],
    },
    {
      name: "الموسم الثالث",
      content: [
        {
      title: "فلسفة الشرق الحاضرة",
      description: "اسم المتحدث",
      icon: "/athbiik.jpg",
      btn:'تفريغ الحلقة'
    },
    {
      title: "فلسفة الشرق الحاضرة",
      description: "اسم المتحدث",
      icon: "/athbiik.jpg",
      btn:'تفريغ الحلقة'
    },
    {
      title: "فلسفة الشرق الحاضرة",
      description: "اسم المتحدث",
      icon: "/athbiik.jpg",
      btn:'تفريغ الحلقة'
    },
    {
      title: "فلسفة الشرق الحاضرة",
      description: "اسم المتحدث",
      icon: "/athbiik.jpg",
      btn:'تفريغ الحلقة'
    },
      ],
    },
    {
      name: "الموسم الرابع",
      content: [
        {
      title: "فلسفة الشرق الحاضرة",
      description: "اسم المتحدث",
      icon: "/athbiik.jpg",
      btn:'تفريغ الحلقة'
    },
    {
      title: "فلسفة الشرق الحاضرة",
      description: "اسم المتحدث",
      icon: "/athbiik.jpg",
      btn:'تفريغ الحلقة'
    },
    {
      title: "فلسفة الشرق الحاضرة",
      description: "اسم المتحدث",
      icon: "/athbiik.jpg",
      btn:'تفريغ الحلقة'
    },
    {
      title: "فلسفة الشرق الحاضرة",
      description: "اسم المتحدث",
      icon: "/athbiik.jpg",
      btn:'تفريغ الحلقة'
    },
      ],
    },
  ];
  const actions = [
    { icon: "/cast.png" },
    { icon: "/audio.png" },
    { icon: "/you.png" },
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
  