<template>
  <section class="container">
    <div class="md:m-16">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
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
      <div v-for="(btn, i) in Collapsebutton" :key="i" class="mb-4">
        <div v-show="isOpen === i">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
            <div class="mb-3" v-for="(items, i) in visibleItems" :key="i">
              <nuxt-link to="/library/specialized" class="block">
              <div class="border rounded-xl">
                <img
                  :src="items.image"
                  alt=""
                  class="w-full h-auto rounded-xl"
                />
                <p
                  class="md:p-4 p-3 bg-[#10526B] text-white relative mt-[-24px] z-[55] rounded-t-[0] rounded-b-[12px] text-base text-center"
                >
                  {{ items.text }}
                </p>
              </div>

              <p
                class="text-center p-3 bg-[#d9d9d97d] rounded-xl mt-3 text-[#10526B] text-base font-semibold"
              >
                {{ items.auth }}
              </p>
            </nuxt-link>
            </div>
          </div>
          <div class="w-full flex items-center justify-center my-4">
            <button @click="prev">
              <img src="../../public/right.png" class="w-4" />
            </button>
            <div class="flex items-center justify-center mx-4">
              <div
                v-for="(item, index) in visibleItemsIndex"
                :key="index"
                class="w-12 h-12 flex items-center justify-center bg-[#BEAE73] text-white rounded-xl mx-2"
              >
                {{ index + 1 }}
              </div>
            </div>
            <button
              @click="next"
              class="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <img src="../../public/right.png" class="w-4 rotate-180" />
            </button>
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
    name: "مقالات نقدية",
    content: [
      {
        text: "Content for مقالات نقدية",
        image: "/arcimg.png",
        auth: "د. هيفاء بنت ناصر الرشيد",
      },
      {
        text: "Content for مقالات نقدية",
        image: "/arcimg.png",
        auth: "د. هيفاء بنت ناصر الرشيد",
      },
      {
        text: "Content for مقالات نقدية",
        image: "/arcimg.png",
        auth: "د. هيفاء بنت ناصر الرشيد",
      },
      {
        text: "Content مقالات نقدية",
        image: "/arcimg.png",
        auth: "د. هيفاء بنت ناصر الرشيد",
      },
      {
        text: "Content  مقالات نقدية",
        image: "/arcimg.png",
        auth: "د. هيفاء بنت ناصر الرشيد",
      },
      {
        text: "Content  مقالات نقدية",
        image: "/arcimg.png",
        auth: "د. هيفاء بنت ناصر الرشيد",
      },
    ],
  },
  {
    name: "مقالات البيضاء المتخصصة",
    content: [
      {
        text: "مقالات البيضاء المتخصصة",
        image: "/arcimg.png",
        auth: "د. هيفاء بنت ناصر الرشيد",
      },
      {
        text: "مقالات البيضاء المتخصصة",
        image: "/arcimg.png",
        auth: "د. هيفاء بنت ناصر الرشيد",
      },
      {
        text: "مقالات البيضاء المتخصصة",
        image: "/arcimg.png",
        auth: "د. هيفاء بنت ناصر الرشيد",
      },
      {
        text: "مقالات البيضاء المتخصصة",
        image: "/arcimg.png",
        auth: "د. هيفاء بنت ناصر الرشيد",
      },
      {
        text: "مقالات البيضاء المتخصصة",
        image: "/arcimg.png",
        auth: "د. هيفاء بنت ناصر الرشيد",
      },
      {
        text: "مقالات البيضاء المتخصصة",
        image: "/arcimg.png",
        auth: "د. هيفاء بنت ناصر الرشيد",
      },
    ],
  },
  {
    name: "خرافات منتشرة",
    content: [
      {
        text: "خرافات منتشرة",
        image: "/arcimg.png",
        auth: "د. هيفاء بنت ناصر الرشيد",
      },
      {
        text: "خرافات منتشرة",
        image: "/arcimg.png",
        auth: "د. هيفاء بنت ناصر الرشيد",
      },
      {
        text: "خرافات منتشرة",
        image: "/arcimg.png",
        auth: "د. هيفاء بنت ناصر الرشيد",
      },
      {
        text: "خرافات منتشرة",
        image: "/arcimg.png",
        auth: "د. هيفاء بنت ناصر الرشيد",
      },
      {
        text: "خرافات منتشرة",
        image: "/arcimg.png",
        auth: "د. هيفاء بنت ناصر الرشيد",
      },
      {
        text: "خرافات منتشرة",
        image: "/arcimg.png",
        auth: "د. هيفاء بنت ناصر الرشيد",
      },
    ],
  },
  {
    name: "مقالات د. هيفاء الرشيد",
    content: [
      {
        text: "مقالات د. هيفاء الرشيد",
        image: "/arcimg.png",
        auth: "د. هيفاء بنت ناصر الرشيد",
      },
      {
        text: "مقالات د. هيفاء الرشيد",
        image: "/arcimg.png",
        auth: "د. هيفاء بنت ناصر الرشيد",
      },
      {
        text: "مقالات د. هيفاء الرشيد",
        image: "/arcimg.png",
        auth: "د. هيفاء بنت ناصر الرشيد",
      },
      {
        text: "مقالات د. هيفاء الرشيد",
        image: "/arcimg.png",
        auth: "د. هيفاء بنت ناصر الرشيد",
      },
      {
        text: "مقالات د. هيفاء الرشيد",
        image: "/arcimg.png",
        auth: "د. هيفاء بنت ناصر الرشيد",
      },
      {
        text: "مقالات د. هيفاء الرشيد",
        image: "/arcimg.png",
        auth: "د. هيفاء بنت ناصر الرشيد",
      },
    ],
  },
];

function toggleCollapse(index) {
  isOpen.value = isOpen.value === index ? null : index;
  currentIndex.value = 0; // Reset the current index when a new button is opened
}

const visibleCount = 3; // Number of items to show at once
const currentIndex = ref(0);

const visibleItems = computed(() => {
  if (isOpen.value !== null) {
    const start = currentIndex.value;
    const end = start + visibleCount;
    return Collapsebutton[isOpen.value].content.slice(start, end);
  }
  return [];
});

const visibleItemsIndex = computed(() => {
  return Array.from({ length: visibleCount }, (_, i) => currentIndex.value + i);
});

function next() {
  if (isOpen.value !== null) {
    if (currentIndex.value < Collapsebutton[isOpen.value].content.length - visibleCount) {
      currentIndex.value += 1;
    }
  }
}

function prev() {
  if (currentIndex.value > 0) {
    currentIndex.value -= 1;
  }
}
</script>

<style scoped>
/* Additional styles if needed */
</style>
