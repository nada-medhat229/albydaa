<template>
    <section class="container py-9 text-center">
        <div>
            <img src="../../assets/images/telegram.png" class="mx-auto md:w-28 md:h-28 w-16 h-16 pb-2">
        <h1 class="lg:text-6xl text-4xl font-bold text-[#10526B] pb-4">
            اسأل البيضاء
        </h1>
        <p class="text-[#9B9E9E] md:text-2xl text-lg font-semibold xl:w-[38%] lg:w-[42%] md:w-[63%] mx-auto md:leading-10 leading-8 pb-7">
            عندما تتسائل عن مستجدات مريبة، وشككت في مخالفتها لديمك وعقيدتك : فاسأل البيضاء .
        </p>
        </div>
       <!-- <div class=" flex flex-wrap mx-3">
        <p v-for="item in partquestion" :key="item.id" class="partquestionstyle bg-[#C7E0DC] px-20 mb-4 py-3 rounded-2xl text-[#10526B] text-xl font-semibold">{{ item.name }}</p>
       </div> -->
       <div class="flex flex-wrap gap-5 xl:justify-between justify-center p-4 mx-3 ">
    <p v-for="(category, index) in categories" :key="index" class="category-button bg-[#C7E0DC] px-20 sm:mb-4 mb-3 py-3 rounded-2xl text-[#10526B] md:text-2xl text-lg font-semibold">
      {{ category.name }}
    </p>
  </div>
    </section>
</template>
<script setup>
const categories = [
  { name: "الأديان والفلسفة الشرقية" ,id:1},
  { name: "تطوير الذات والدورات التدريبية",id:2},
  { name: "متفرقات" ,id:3},
  { name: "القوانين الكونية والروحانية" ,id:4},
  { name: "التصوف والروحانيات الحديثة" ,id:5},
  { name: "الوعي النفسي بالعقل الباطن",id:6},
  { name: "ممارسة الطاقة والطب البديل" ,id:7},
];
</script>
<style>
 .category-button:last-child{
       width: 100%;
    }
  @media (min-width: 1420px) {
    /* .category-button:nth-child(1),
.category-button:nth-child(2),
.category-button:nth-child(3),
.category-button:nth-child(5){
        padding-right: 7rem;
        padding-left: 7rem;
    }

.category-button:nth-child(2){
    padding-right: 7rem;
        padding-left: 7rem;
} */
 
   
        .category-button:nth-child(1),
.category-button:nth-child(3),
.category-button:nth-child(5),
.category-button{
        padding-right: 6.5rem;
        padding-left: 6.5rem;
    }

    .category-button:nth-child(2),
    .category-button:nth-child(4),
    .category-button:nth-child(6){
        padding-right: 3.5rem;
        padding-left: 3.5rem;
    }
  }

    @media (max-width: 1420px) {
        .category-button:nth-child(1),
.category-button:nth-child(2),
.category-button:nth-child(3),
.category-button{
        padding-right: 4rem;
        padding-left: 4rem;
    }
    .category-button:nth-child(3){
        padding-right: 5rem;
        padding-left: 5rem;
    }
    .category-button:nth-child(4),
    .category-button:nth-child(5),
    .category-button:nth-child(6){
        padding-right: 2rem;
        padding-left: 2rem;
    }
  }
  @media (max-width: 1200px) {
        .category-button:nth-child(1),
.category-button:nth-child(2),
.category-button:nth-child(3),
.category-button{
        padding-right: 2rem;
        padding-left: 2rem;
    }
    .category-button:nth-child(4),
    .category-button:nth-child(5),
    .category-button:nth-child(6){
        padding-right: 10px;
                padding-left: 10px;
    }

  }
  @media (max-width: 992px) {
        .category-button:nth-child(1),
.category-button:nth-child(2),

.category-button:nth-child(5),
.category-button{
        padding-right: 1.5rem;
        padding-left: 1.5rem;
    }
    .category-button:nth-child(4),
    .category-button:nth-child(3){
        padding-right: 4rem;
        padding-left: 4rem;
    }
    }
    @media (max-width: 768px) {
        .category-button:nth-child(1),
.category-button:nth-child(2),

.category-button:nth-child(5),
.category-button{
        padding-right: 11px;
        padding-left: 11px;
    }
    .category-button:nth-child(4), .category-button:nth-child(3) {
        padding-right: 3rem;
        padding-left: 3rem;
    }
    }
    @media (max-width: 576px) {
        .category-button{
            font-size: 18px !important;
            width: 100%;
            padding-right: 11px !important;
        padding-left: 11px !important;
        }
       
    }
</style>
