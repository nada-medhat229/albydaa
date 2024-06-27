<template>
  <section class="my-20">
    <div class="overflow-x-auto">
      <table class="min-w-full bg-white overflow-x-auto widtable">
        <thead class="bg-[#10526B] text-white py-2">
          <tr>
            <th class="lg:p-6 p-4 my-2 lg:text-xl text-lg font-medium headtable">م</th>
            <th class="lg:p-6 p-4 my-2 lg:text-xl text-lg font-medium headtable">
              اسم البحث
            </th>
            <th class="lg:p-6 p-4 my-2 lg:text-xl text-lg font-medium headtable">
              ملخص البحث
            </th>
            <th class="lg:p-6 p-4 my-2 lg:text-xl text-lg font-medium headtable">
              الباحث
            </th>
            <th class="lg:p-6 p-4 my-2 lg:text-xl text-lg font-medium headtable">
              درجة الباحث
            </th>
            <th class="lg:p-6 p-4 my-2 lg:text-xl text-lg font-medium headtable">
              البحث كامل
            </th>
          </tr>
        </thead>
        <tbody>
          <template v-for="(item, index) in items" :key="index">
            <tr
              class="text-center lg:text-xl text-base text-[#10526B]"
              :class="item.showDetails?'bg-[#fff]':'bg-[#c7e0dcc7] '"
            >
              <td class="lg:p-7 p-5 font-semibold">
                {{ index + 1 }}
              </td>
              <td class="lg:p-7 p-5 font-semibold">
                {{ item.title }}
              </td>
              <td class="xl:p-7 p-4">
                <button
                  @click="toggleDetails(index)"
                  class="xl:w-10/12 w-full m-auto text-white xl:text-lg text-base text-center p-1 rounded-xl flex items-center xl:justify-center justify-around"
                  :class="item.showDetails?'bg-[#10526B]':'bg-[#BEAE73] '"

                >
                <p>
                    اقرا المزيد
                </p>
                <img src="../../public/vector.png" class="xl:w-10 w-3 xl:px-3 px-0 mt-1" alt="">
                </button>
              </td>
              <td class="lg:p-7 p-5 font-semibold">
                {{ item.researcher }}
              </td>
              <td class="lg:p-7 p-5 font-semibold">
                {{ item.degree }}
              </td>
              <td class="lg:p-7 p-5">
                <img :src="item.fullText" alt="" class="w-10 m-auto" />
              </td>
            </tr>
            <tr v-if="item.showDetails">
              <td colspan="6" class="lg:p-7 p-5 lg:text-2xl text-base leading-10 font-semibold text-[#858686]">
                {{ item.summary }}
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
    <div class="flex justify-center mt-8">
      <button @click="addMoreItems">
        <img src="../../public/addsquare.png" class="w-[3.5rem]" />
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
  {
    title: "حركة العصر الجديد",
    summary: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.",
    researcher: "د. هيفاء بنت ناصر الرشيد",
    degree: "دكتوراه",
    fullText: "/openbook.png",
    showDetails: false,
  },
  {
    title: "حركة العصر الجديد",
    summary: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.",
    researcher: "د. هيفاء بنت ناصر الرشيد",
    degree: "دكتوراه",
    fullText: "/openbook.png",
    showDetails: false,
  },
  {
    title: "حركة العصر الجديد",
    summary: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.",
    researcher: "د. هيفاء بنت ناصر الرشيد",
    degree: "دكتوراه",
    fullText: "/openbook.png",
    showDetails: false,
  },
]);

function toggleDetails(index) {
  items.value[index].showDetails = !items.value[index].showDetails;
}

function addMoreItems() {
  const newItems = [
    {
      title: "حركة العصر الجديد",
      summary: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.",
      researcher: "د. هيفاء بنت ناصر الرشيد",
      degree: "دكتوراه",
      fullText: "/openbook.png",
      showDetails: false,
    },
  ];
  items.value.push(...newItems);
}
</script>

<style scoped>
.headtable:not(:last-child) {
  border-left: 1px solid #fff;
}
@media (max-width: 920px) {
    .widtable{
        width: 920px;
    }
}
</style>
