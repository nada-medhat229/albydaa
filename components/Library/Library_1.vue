<template>
    <section class='my-16'>
     <div class="container mb-28">
    <div class="flex justify-between items-center mb-8 text-2xl text-[#10526B] font-semibold">
      <div>مقال: قد أفلح من زكاها</div>
      <div>1445 هجريا</div>
    </div>
    <div class="bg-[#c7e0dcc7] py-3 px-8 rounded-lg text-[#868686]  font-semibold text-xl flex justify-between items-center">
      <div class=" ">للكاتبة: د. هيفاء بنت ناصر الرشيد</div>

      <div class="flex items-center">
        <p class="">
            333
        </p>
        <img src="/public/eye.png" alt="Icon" class="w-8 h-8 mr-2" />

      </div>
    </div>
  </div>
  <div class="relative">

  
    <section class="container ">
      <div class="text-end ml-8 mb-[-18px]">
        <button class="bg-[#BEAE73] text-white p-2 rounded mx-1">
          <img src="/download.png" alt="Download" class="w-4 h-4" />
        </button>
        <button class="bg-[#BEAE73] text-white p-2 rounded mx-1">
          <img src="/upload.png" alt="Share" class="w-4 h-4" />
        </button>
      </div>
      <div class="bg-[#c4c4c429] rounded-xl sm:px-4 px-10 py-16">
        <div
          v-for="(text, index) in paginatedContent"
          :key="index"
          class="mb-5"
        >
          <p class="sm:text-xl text-base font-semibold leading-relaxed">{{ text.text }}</p>
        </div>
      </div>
    </section>

    <div class="flex sm:justify-between justify-center mt-4 absolute sm:top-[50%] w-full">
      <button
        @click="prevPage"
        class="text-white sm:rotate-[-90deg] bg-[#BEAE73] sm:px-20 px-4 sm:py-1 py-4 sm:rounded-t-xl sm:rounded-b-[0] rounded-lg relative sm:right-[-98px] flex items-center sm:mx-0 mx-2"
      >
        <p class="sm:inline hidden">السابق</p>
        <img src="/vector.png" class="w-5  sm:rotate-[0] rotate-[-90deg]" />
      </button>
      <button
        @click="nextPage"
        class="text-white sm:rotate-[-90deg] bg-[#BEAE73] sm:px-20 px-4 sm:py-1 py-4 sm:rounded-b-xl sm:rounded-t-[0] rounded-lg relative sm:left-[-98px] flex items-center sm:mx-0 mx-2"
      >
        <p class="sm:inline hidden">التالي</p>
        <img src="/vector.png" class="w-5 sm:rotate-[-180deg] rotate-[90deg] sm:mr-2" />
      </button>
    </div>
</div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
const currentPage = ref(0);
const itemsPerPage = 5; // Number of items to show per page

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
/* Add any additional styling here */
</style>
