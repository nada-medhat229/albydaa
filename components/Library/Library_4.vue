<template>
  <section class="my-16">
    <div class="container sm:mb-28 mb-16">
      <div
        class="bg-[#c7e0dcc7] py-4 sm:mt-28 mt-20 px-8 rounded-lg font-semibold sm:flex block justify-between items-center"
      >
        <div class="">
          <p class="text-[#10526B] sm:text-2xl text-xl pb-3">
            كتاب : حركة العصر الجديد
          </p>
          <p class="text-[#868686] sm:text-xl text-lg">
            للكاتبة: د. هيفاء بنت ناصر الرشيد
          </p>
        </div>
        <img
          src="/bookthreed.png"
          class="md:w-72 md:h-60 w-44 h-48 sm:mt-[-110px] mt-0 m-auto sm:m-0 "
        />
      </div>
    </div>
    <div class="relative">
      <section class="container">
        <div class="text-end ml-8 mb-[-18px]">
          <button class="bg-[#BEAE73] text-white p-1 rounded mx-1">
            <img src="/public/download.png" alt="Download" class="w-6 h-6" />
          </button>
          <button class="bg-[#9FCA94] text-white p-1 rounded mx-1">
            <img src="/public/shoppingcarts.png" alt="Share" class="w-6 h-6" />
          </button>
        </div>
        <div class="bg-[#c4c4c429] rounded-xl sm:px-4 px-10 py-16">
          <div
            v-for="(text, index) in paginatedContent"
            :key="index"
            class="mb-5"
          >
            <p class="sm:text-xl text-base font-semibold leading-relaxed">
              {{ text.text }}
            </p>
          </div>
        </div>
      </section>

      <div
        class="flex sm:justify-between justify-center mt-4 absolute sm:top-[50%] w-full"
      >
        <button
          @click="prevPage"
          class="text-white sm:rotate-[-90deg] bg-[#BEAE73] sm:px-20 px-4 sm:py-1 py-4 sm:rounded-t-xl sm:rounded-b-[0] rounded-lg relative sm:right-[-98px] flex items-center sm:mx-0 mx-2"
        >
          <p class="sm:inline hidden">السابق</p>
          <img src="/vector.png" class="w-5 sm:rotate-[0] rotate-[-90deg]" />
        </button>
        <button
          @click="nextPage"
          class="text-white sm:rotate-[-90deg] bg-[#BEAE73] sm:px-20 px-4 sm:py-1 py-4 sm:rounded-b-xl sm:rounded-t-[0] rounded-lg relative sm:left-[-98px] flex items-center sm:mx-0 mx-2"
        >
          <p class="sm:inline hidden">التالي</p>
          <img
            src="/vector.png"
            class="w-5 sm:rotate-[-180deg] rotate-[90deg] sm:mr-2"
          />
        </button>
      </div>
    </div>
    <section class="container">
      <div class="flex items-center my-28">
        <div class="flex-grow border-t border-[#10526B]"></div>
        <span class="px-4 md:text-xl text-lg font-bold text-[#10526B]"
          >كتب مشابهة</span
        >
        <div class="flex-grow border-t border-[#10526B]"></div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div class="mb-16 cardstyle" v-for="(item, i) in initialItems" :key="i">
          <nuxt-link to="/library/onebook" class="block p-3">
            <div class="bg-[#c4c4c429] p-4 rounded-lg relative">
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
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
const currentPage = ref(0);
const itemsPerPage = 5; // Number of items to show per page

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
const content = [
  {
    text: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.",
  },
  {
    text: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.",
  },
  {
    text: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.",
  },
  {
    text: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.",
  },
  {
    text: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.",
  },
  {
    text: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.",
  },
  {
    text: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.",
  },
];

const paginatedContent = computed(() => {
  const start = currentPage.value * itemsPerPage;
  const end = start + itemsPerPage;
  return content.slice(start, end);
});

function nextPage() {
  if ((currentPage.value + 1) * itemsPerPage < content.length) {
    currentPage.value += 1;
  }
}

function prevPage() {
  if (currentPage.value > 0) {
    currentPage.value -= 1;
  }
}
</script>

<style scoped>
.cardstyle:nth-child(2) {
  margin-top: 90px;
}
@media (max-width: 992px) {
  .cardstyle:nth-child(2) {
    margin-top: 0;
  }
}
</style>
