<!-- components/Achievements.vue -->
<template>
  <div
    class=" md:py-28 container flex items-center rounded-2xl justify-center min-h-96 bg-[#d9d9d947] my-7"
  >
    <div class="w-full relative md:pt-0 pt-16">
      <div
        class="textofnum grid items-center w-full min-h-96 absolute "
      >
        <h2
          class="xl:text-6xl py-2 lg:text-5xl text-4xl  lg:w-[19%]  md:w-[28%] font-semibold text-center text-[#10526B]"
          style="line-height: 1.8"
        >
          إنجازاتنا في أرقام
        </h2>
      </div>

      <div class="grid grid-cols-2 gap-4 md:pt-0 pt-20">
        <div
          class="flex flex-col items-center mb-7 artict"
          v-for="(art, i) in slides"
          :key="i"
        >
          <span class="text-[#9B9E9E] md:text-3xl text-xl mb-3 font-bold mt-2">
            {{ art.text }}
          </span>

          <div
            class="bg-[#0B4F69] text-white text-3xl font-bold sm:py-12 py-8 sm:px-11 px-7 rounded-lg bluebox relative"
          >
            {{ art.num }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const slides = ref([
  { num: 200, text: " مقالا علميا" },
  { num: 200, text: " مقالا علميا" },
  { num: 200, text: " مقالا علميا" },
  { num: 200, text: " مقالا علميا" },
]);
</script>

<style scoped>
/* Add any additional styles if necessary */
.bluebox::before {
  content: "";
  display: block;
  width: 500px;
  position: absolute;
  border: 1px solid #0B4F69;
  top: 50%;
  transform: translateY(-50%);
}

.artict:nth-child(2n) .bluebox::before {

  right: 95px;
  left: auto;
}
.artict:nth-child(2n-1) .bluebox::before {
    left: 95px;
  right: auto;
}
.textofnum{
    place-items: center
}
@media (max-width: 768px) {
    .textofnum{
    place-items: normal
}

}
</style>
