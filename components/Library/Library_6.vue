<template>
    <section class="container mx-auto my-16">
      <!-- Search Bar -->
      <div class="bg-[#c7e0dcc7] md:py-6 md:px-6 py-4 px-1 rounded-lg shadow-md md:mb-32 mb-8">
        <div class="relative flex items-center">
          <input
            v-model="searchTerm"
            type="text"
            placeholder="اكتب مصطلحا تبحث عنه"
            class="w-full p-3 pr-10 rounded-lg text-gray-700 focus:outline-none"
          @input="filterByChar(searchTerm)"/>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 absolute right-3 text-gray-500"
 width="30" height="30" viewBox="0 0 30 30" fill="none">
<g clip-path="url(#clip0_72_3401)">
<path d="M18.1641 11.1328C17.8406 11.1328 17.5781 11.3953 17.5781 11.7188C17.5781 12.0422 17.8406 12.3047 18.1641 12.3047C18.4875 12.3047 18.75 12.0422 18.75 11.7188C18.75 11.3953 18.4875 11.1328 18.1641 11.1328Z" fill="#9B9E9E"/>
<path d="M29.3133 25.9992L21.4922 18.1781C22.7664 16.2589 23.4375 14.0364 23.4375 11.7188C23.4375 5.25703 18.1805 0 11.7188 0C5.25703 0 0 5.25703 0 11.7188C0 18.1805 5.25703 23.4375 11.7188 23.4375C14.0365 23.4375 16.2589 22.7663 18.1781 21.4923L20.3399 23.6541C20.3402 23.6544 20.3405 23.6547 20.3408 23.6551L25.9991 29.3133C26.442 29.7561 27.0304 30 27.6562 30C28.2821 30 28.8705 29.7561 29.3132 29.3135C29.7561 28.871 30 28.2824 30 27.6562C30 27.0301 29.7561 26.4415 29.3133 25.9992ZM17.9025 20.2574L17.9024 20.2576C16.0938 21.5712 13.9556 22.2656 11.7188 22.2656C5.9032 22.2656 1.17188 17.5343 1.17188 11.7188C1.17188 5.9032 5.9032 1.17188 11.7188 1.17188C17.5343 1.17188 22.2656 5.9032 22.2656 11.7188C22.2656 13.9556 21.5712 16.0938 20.2575 17.9024C19.6003 18.8079 18.8079 19.6003 17.9025 20.2574ZM19.1318 20.7887C19.7382 20.2925 20.2926 19.7382 20.7887 19.1318L22.451 20.7942C21.9455 21.3908 21.3908 21.9455 20.7942 22.451L19.1318 20.7887ZM28.4847 28.4847C28.2632 28.7062 27.969 28.8281 27.6562 28.8281C27.3435 28.8281 27.0493 28.7062 26.8278 28.4847L21.625 23.2819C22.2183 22.7726 22.7726 22.2184 23.2818 21.625L28.4848 26.828C28.7062 27.0492 28.8281 27.3432 28.8281 27.6562C28.8281 27.9693 28.7062 28.2633 28.4847 28.4847Z" fill="#9B9E9E"/>
<path d="M11.7188 2.34375C6.54932 2.34375 2.34375 6.54932 2.34375 11.7188C2.34375 16.8882 6.54932 21.0938 11.7188 21.0938C16.8882 21.0938 21.0938 16.8882 21.0938 11.7188C21.0938 6.54932 16.8882 2.34375 11.7188 2.34375ZM11.7188 19.9219C7.19555 19.9219 3.51562 16.242 3.51562 11.7188C3.51562 7.19555 7.19555 3.51562 11.7188 3.51562C16.242 3.51562 19.9219 7.19555 19.9219 11.7188C19.9219 16.242 16.242 19.9219 11.7188 19.9219Z" fill="#9B9E9E"/>
<path d="M18.2851 9.2035C17.7805 7.89029 16.902 6.76752 15.7444 5.95664C14.5593 5.12637 13.1672 4.6875 11.7188 4.6875C11.3952 4.6875 11.1328 4.94988 11.1328 5.27344C11.1328 5.59699 11.3952 5.85938 11.7188 5.85938C14.1269 5.85938 16.326 7.37215 17.1912 9.62385C17.2807 9.85682 17.5027 9.99978 17.7383 9.99978C17.8081 9.99978 17.8792 9.98719 17.9483 9.96064C18.2503 9.84457 18.4011 9.50561 18.2851 9.2035Z" fill="#9B9E9E"/>
</g>
<defs>
<clipPath id="clip0_72_3401">
<rect width="28" height="30" fill="white"/>
</clipPath>
</defs>
</svg>
         
        </div>
        <div class="flex flex-wrap justify-center mt-4 m-auto xl:w-8/12 lg:w-9/12 w-full ">
          <button
            @click="filterByChar(char)"
            v-for="char in arabicAlphabet"
            :key="char"
            class="md:w-10 w-9 md:h-10 h-9 flex items-center justify-center lg:m-2 m-1 hover:bg-[#10526B] bg-white text-white rounded-md"
            
          >
            {{ char }}
          </button>
        </div>
      </div>
  
      <!-- Results List -->
      <div v-for="(item, index) in filteredItems" :key="index" class="my-14 p-6 bg-[#c4c4c429] rounded-lg shadow-md">
        <div class="flex md:flex-row flex-col">
          <div class="flex-shrink-0">
            <img :src="item.icon" alt="icon" class="md:w-36 w-full h-48 rounded-xl object-cover mt-[-40px]" />
          </div>
          <div class="mx-4 flex-grow ">
            <h3 class="text-xl font-semibold text-[#10526B] py-2">{{ item.title }}</h3>
            <p class="text-[#909090] text-lg mt-2">
              {{ item.description }}
              <a href="#" class="text-[#10526B]"> عرض أكثر</a>
            </p>
          </div>
          <div class="flex md:flex-col flex-row justify-center items-center md:space-y-2 my-2 xl:w-11 lg:w-16 md:w-20 w-full ml-[-35px]">
            <button v-for="(action, i) in actions" :key="i" class="bg-[#BEAE73] p-2 md:mx-0 mx-1  rounded-full">
              <img :src="action.icon" alt="action icon" class="md:w-full w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, computed } from "vue";
  
  const arabicAlphabet = [
    "ا",
    "ب",
    "ت",
    "ث",
    "ج",
    "ح",
    "خ",
    "د",
    "ذ",
    "ر",
    "ز",
    "س",
    "ش",
    "ص",
    "ض",
    "ط",
    "ظ",
    "ع",
    "غ",
    "ف",
    "ق",
    "ك",
    "ل",
    "م",
    "ن",
    "ه",
    "و",
    "ي",
  ];
  
  const items = ref([
    {
      title: "بوذا",
      description: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة ",
      icon: "/athbiik.jpg",
    },
    {
      title: "تاريخ الإسلام",
      description: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة  ",
      icon: "/athbiik.jpg",
    },
    {
      title: "الحضارة العربية",
      description: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة ",
      icon: "/athbiik.jpg",
    },
  ]);
  
  const actions = [
    { icon: "/upload.png" },
    { icon: "/copy.png" },
    { icon: "/you.png" },
  ];
  
  const searchTerm = ref("");
  const selectedChar = ref("");
  const filteredItems = computed(() => {
    if (selectedChar.value) {
      return items.value.filter(item => item.title.startsWith(selectedChar.value));
    } else if (searchTerm.value) {
      return items.value.filter(item => item.title.includes(searchTerm.value));
    } else {
      return items.value;
    }
  });
  function filterByChar(char) {
    selectedChar.value = char;
    searchTerm.value = char;
  }
  </script>
  
  <style scoped>
  /* Additional styles if needed */
  </style>
  