<template>
  <div class="container p-16 sm:px-16 px-4">
    <!-- Profile Header -->
    <div
      class="flex items-start lg:flex-row flex-col bg-[#c7e0dcc7] sm:p-7 p-5 rounded-lg mb-4"
    >
      <div
        class="bg-[#10526B] rounded-lg sm:w-24 w-20 sm:h-20 h-16 relative mb-2 mt-[-65px] flex items-center justify-center"
      >
        <img src="markerwh.png" alt="Icon" class="w-9 h-9" />
      </div>
      <div class="flex-grow sm:pr-5">
        <h2 class="text-2xl text-[#10526B] font-bold md:mb-3">
          د. هيفاء الرشيد
        </h2>
        <p class="text-lg text-[#9B9E9E] mb-3">
          الاستاذ المشارك بقسم العقيدة والمذاهب المعاصرة
        </p>
      </div>
      <button
        @click="openModal"
        class="bg-[#BEAE73] text-white py-2 px-4 lg:mr-0 sm:mr-5 text-lg rounded-lg"
      >
        اطلب استشارة
      </button>
    </div>

    <!-- Consultation Fields -->
    <div class="md:mb-16 mb-4 md-4 mt-8 flex flex-wrap items-center">
      <h3
        class="sm:text-lg text-base lg:font-semibold font-medium text-[#10526B] bg-[#C7E0DCC7] py-2 sm:px-3 px-1 rounded mb-2"
      >
        مجالات الاستشارة :
      </h3>
      <h3
        class="sm:text-lg text-base lg:font-semibold font-medium text-[#9B9E9E] py-2 sm:px-5 px-2 rounded border mx-2 mb-2"
      >
        عقدي
      </h3>
      <h3
        class="sm:text-lg text-base lg:font-semibold font-medium text-[#9B9E9E] py-2 sm:px-5 px-2 rounded border mx-2 mb-2"
      >
        فكر روحاني
      </h3>
    </div>

    <!-- Summary Section -->
    <div class="mb-4">
      <div class="flex items-center gap-2 md:mb-10 mb-4">
        <div class="bg-[#10526B] w-9 h-9 rounded-lg"></div>

        <h3
          class="sm:text-3xl text-2xl font-semibold text-[#10526B] py-1 px-6 rounded-lg bg-[#c7e0dcc7] flex-grow"
        >
          نبذة مختصرة
        </h3>
      </div>
      <p class="text-[#8B8B8B] leading-loose text-2xl">
        هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
        النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من
        النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
      </p>
      <p class="text-[#8B8B8B] leading-loose text-2xl">
        هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة. لقد تم توليد هذا
        النص من مواد النص العربي، حيث يمكنك أن تولد مثل هذا النص أو العديد من
        النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
      </p>
      <p class="text-[#8B8B8B] leading-loose text-2xl">
        هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة. لقد تم توليد هذا
        النص من مواد النص العربي، حيث يمكنك أن تولد مثل هذا النص أو العديد من
        النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
      </p>
    </div>
    <Modal :show="isModalOpen" title="طلب استشارة" @close="closeModal">
      <p>This is the content of the modal.</p>
    </Modal>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Modal from './Modal.vue'; // Adjust the path as necessary

const isModalOpen = ref(false);

function openModal() {
  isModalOpen.value = true;
}

function closeModal() {
  isModalOpen.value = false;
}
</script>

<style scoped>
/* Additional styles if needed */
</style>
