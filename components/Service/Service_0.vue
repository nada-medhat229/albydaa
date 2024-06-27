<template>
  <section class="container my-28">
    <div class=" rounded-lg p-4 border border-[#9B9E9E78] md:mx-2 mb-24" v-for="(item, index) in items" :key="index">
    
   
    <div class="flex items-stretch sm:mx-4 mx-0 mt-[-64px]">
      <div class="flex justify-center items-center bg-[#BEAE73] sm:p-4 p-1 rounded-3xl">
        <img :src="item.icon" alt="Icon" class="md:w-16 w-24 h-11 " />
      </div>
      <div class="flex justify-center items-center w-full bg-[#c7e0dc] text-center py-2 px-4 rounded-3xl sm:mx-4 mx-2">
        <h2 class="md:text-2xl text-base font-semibold text-[#10526B]">{{ item.title }}  </h2>
      </div>
      <div class="flex flex-col md:w-40 sm:w-44 w-56 md:text-lg text-base">
        <nuxt-link to="/service/singleproject" class="bg-[#BEAE73] text-white py-2 md:px-4 px-2 rounded-lg mb-2 text-center">
        تعرف اكثر
        </nuxt-link>

      <button class="bg-[#10526B] text-white py-2 md:px-4 px-2 rounded-lg">
        المخرجات
      </button>
    </div>
    </div>
   <p class="text-[#858686] md:text-xl text-base mt-4 md:px-9 md:py-5 md:leading-10 font-semibold">
    {{ item.description }}
   </p>
  </div>
  <div class="flex justify-center">
      <button @click="addMoreItems">
        <img src="/public/addsquare.png" class="w-[3.5rem]" />
      </button>
    </div>
  </section>
 
</template>

<script setup>

const items = ref([
    {
      title: "مشروع حثيث ",
      description: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة ",
      icon: "/headphone.png",
    },
    {
      title: "مشروع حثيث ",
      description: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة  ",
      icon: "/headphone.png",
    },
    {
      title: "مشروع حثيث ",
      description: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة ",
      icon: "/headphone.png",
    },
  ]);
  
function addMoreItems() {
  const newItems = [
    {
      title: "مشروع حثيث ",
      description: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة ",
      icon: "/headphone.png",
    },
  ];
  items.value.push(...newItems);
}
</script>

<style scoped>
/* Additional styles if needed */
</style>
