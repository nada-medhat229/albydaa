<template>
  <section class="container">
    <div class="flex items-center my-20">
    <div class="flex-grow border-t border-[#10526B]"></div>
    <span class="px-4 md:text-xl text-lg font-bold text-[#10526B]">كتب مشابهة</span>
    <div class="flex-grow border-t border-[#10526B]"></div>
  </div>
    <div class="md:m-16">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          <div class="mb-3" v-for="(items, i) in Collapsebutton" :key="i">
            <div class="border rounded-xl">
              <img :src="items.image" alt="" class="w-full h-auto rounded-xl" />
              <p
                class="md:p-4 p-3 bg-[#10526B] text-white relative mt-[-24px] z-[55] rounded-t-[0] rounded-b-[12px] text-base text-center"
              >
                {{ items.text }}
              </p>
            </div>

            <p
              class="text-center p-3 bg-[#c7e0dcc7] rounded-xl mt-3 text-[#10526B] text-base font-semibold"
            >
              {{ items.auth }}
            </p>
          </div>
        </div>
      </div>
  </section>
</template>

<script setup>
const Collapsebutton = [
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
];
</script>

<style scoped>
</style>
