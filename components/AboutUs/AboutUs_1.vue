<template>
  <section class="container my-8 md:pt-5 ">
    <div
      v-for="(about, index) in dataofabout"
      :key="index"
      class="md:pb-16 pb-6 lg:mx-24 "
    >
      <div class="flex items-stretch md:my-8 my-4">
        <div class="bg-[#BEAE73] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] w-16 rounded-md md:ml-4 ml-2"></div>

        <div  class="bg-[#c4c4c429] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] rounded-xl pt-24 md:pb-14 pb-8 pr-7 md:pl-12 pl-7">
            <img src="/quote.png" alt="" class="mt-[-7.5rem] mr-auto ml-[2rem] w-14">
            <p class=" md:text-3xl text-xl  font-semibold md:py-16 py-5 md:leading-[2.5rem] text-[#616161bf]">
            {{ about.text }}  
            </p>
            <p class="text-end text-2xl font-semibold text-[#10526B] md:pt-5 pt-3">
                {{ about.auth }}
            </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const dataofabout = [
  {
    auth: "د . خالد الخطيب",
    text: " قد سعدت بما رأيته من جهود مباركة تبذلها مؤسسة البيضاء في الذب عن عقيدة الإسلام وحماية بيضة مجتمع السنة، . رئيس قسم العلوم الإسلامية، الكلية الحربية. ٦/ ۳/ ۱٤۳۷ هـ. ",
  },
  {
    auth: "د . خالد الخطيب",
    text: " قد سعدت بما رأيته من جهود مباركة تبذلها مؤسسة البيضاء في الذب عن عقيدة الإسلام وحماية بيضة مجتمع السنة، . رئيس قسم العلوم الإسلامية، الكلية الحربية. ٦/ ۳/ ۱٤۳۷ هـ. ",
  },
  {
    auth: "د . خالد الخطيب",
    text: " قد سعدت بما رأيته من جهود مباركة تبذلها مؤسسة البيضاء في الذب عن عقيدة الإسلام وحماية بيضة مجتمع السنة، . رئيس قسم العلوم الإسلامية، الكلية الحربية. ٦/ ۳/ ۱٤۳۷ هـ. ",
  },
  {
    auth: "د . خالد الخطيب",
    text: " قد سعدت بما رأيته من جهود مباركة تبذلها مؤسسة البيضاء في الذب عن عقيدة الإسلام وحماية بيضة مجتمع السنة، . رئيس قسم العلوم الإسلامية، الكلية الحربية. ٦/ ۳/ ۱٤۳۷ هـ. ",
  },
];
</script>

<style scoped></style>
