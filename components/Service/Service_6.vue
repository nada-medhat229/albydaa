<template>
  <section class="py-16 xl:mx-44 mx-5">
    <div class="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-7 mb-12">
      <div v-for="(item, i) in items" :key="i">
        <div
          class="bg-[#10526B] rounded-lg w-24 h-20 mr-auto ml-[40px] mb-[-40px] relative mb-5 flex items-center justify-center"
        >
          <img src="../../public/markerwh.png" alt="Icon" class="w-8 h-8" />
        </div>
        <div
          class="bg-[#C4C4C429] rounded-xl font-bold xl:px-18 px-10 py-12 text-center flex flex-col items-center"
        >
          <p class="text-2xl text-[#10526B] mb-1">{{ item.name }}</p>
          <p class="text-xl text-[#9B9E9E] md:leading-9">{{ item.text }}</p>
        </div>
        <div class="w-full text-center bg-[#BEAE73] text-white text-xl p-3 rounded-xl mt-5">
            <nuxt-link to="/service/singleconsultation"
        >
          {{ item.btn }}
        </nuxt-link>
        </div>
       
      </div>
    </div>
    <div class="flex justify-center">
      <button @click="addMoreItems">
        <img src="../../public/addsquare.png" class="w-[3.5rem]" />
      </button>
    </div>
  </section>
</template>

<script setup>
const items = ref([
  {
    name: "د. هيفاء الرشيد",
    text: "الاستاذ المشارك بقسم العقيدة والمذاهب المعاصرة",
    btn: "السيرة الذاتية",
  },
  {
    name: "د. هيفاء الرشيد",
    text: "الاستاذ المشارك بقسم العقيدة والمذاهب المعاصرة",
    btn: "السيرة الذاتية",
  },
  {
    name: "د. هيفاء الرشيد",
    text: "الاستاذ المشارك بقسم العقيدة والمذاهب المعاصرة",
    btn: "السيرة الذاتية",
  },
  {
    name: "د. هيفاء الرشيد",
    text: "الاستاذ المشارك بقسم العقيدة والمذاهب المعاصرة",
    btn: "السيرة الذاتية",
  },
  {
    name: "د. هيفاء الرشيد",
    text: "الاستاذ المشارك بقسم العقيدة والمذاهب المعاصرة",
    btn: "السيرة الذاتية",
  },
  {
    name: "د. هيفاء الرشيد",
    text: "الاستاذ المشارك بقسم العقيدة والمذاهب المعاصرة",
    btn: "السيرة الذاتية",
  },
]);

function addMoreItems() {
  const newItem = [
    {
    name: "د. هيفاء الرشيد",
    text: "الاستاذ المشارك بقسم العقيدة والمذاهب المعاصرة",
    btn: "السيرة الذاتية",
  },
  {
    name: "د. هيفاء الرشيد",
    text: "الاستاذ المشارك بقسم العقيدة والمذاهب المعاصرة",
    btn: "السيرة الذاتية",
  },
  {
    name: "د. هيفاء الرشيد",
    text: "الاستاذ المشارك بقسم العقيدة والمذاهب المعاصرة",
    btn: "السيرة الذاتية",
  },
  ];
  items.value.push(...newItem);
}
</script>

<style scoped>
/* Additional styles if needed */
</style>
