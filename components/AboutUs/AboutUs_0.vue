<template>
  <section class="container my-8 md:pt-5">
    <div v-for="(about, index) in dataofabout" :key="index" class="md:pb-16 pb-8 md:mx-20">
      <div class="flex items-center md:my-8 my-4" >
    <div class="bg-[#10526B] md:w-11 w-9 md:h-11 h-9 rounded-md mx-1"></div>
      <h1 class="md:text-4xl text-3xl bg-[#c7e0dcc7] px-6 pb-1 mx-1 rounded-md w-full font-bold text-[#10526B] flex-grow text-right">
        {{ about.title }}
      </h1>
      </div>
      <p class="text-[#616161bf] md:text-2xl text-2xl md:font-bold max-w-5xl md:leading-[2.5rem]">
      {{ about.text }}
  
    </p>
    </div>
   
    
  </section>
 
</template>

<script setup>
const dataofabout = [
  { title: " عن البيضاء", text: "مؤسسة وقفية تعني بالتأصيل العقدي، ورفع الوعي بخطورة الفكر الروحاني الحديث   من خلال تقديم الدراسات والبحوث المتخصصة والأنشطة والمشاريع النوعية" },
  { title: "رؤيتنا", text: "الريــــادة الوطنية فـــــي التصــــــدي للفكـــــر الباطـــني الحديث."},
    { title: "أهدافنا", text: "التصـــــدي للفكـر الباطـني الحديث مــن خلال تقديم الاستـــشارات والبحــــوث المتخصصــة، وتأهيل المختصين وفق منهجية شرعية أصيلة." },

];
</script>

<style scoped>
</style>
