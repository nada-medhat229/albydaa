<template>
  <section class="container md:mx-16 mx-2 md:p-16 p-6">
    <div class="">
      <p
        class="text-[#9B9E9E] md:text-2xl text-xl md:leading-[3rem] md:font-semibold font-medium md:mb-10 mb-4"
      >
        مؤسسة وقفية تعني بالتأصيل العقدي، ورفع الوعي بخطورة الفكر الروحاني
        الحديث من خلال تقديم الدراسات والبحوث المتخصصة والانشطة والمشاريع
        النوعية
      </p>
      <div class="flex items-center gap-2 md:mb-10 mb-4">
        <div class="bg-[#10526B] w-9 h-9 rounded-lg"></div>

        <h3
          class="sm:text-3xl text-2xl font-semibold text-[#10526B] py-1 px-6 rounded-lg bg-[#c7e0dcc7] flex-grow"
        >
          عنوان
        </h3>
      </div>
      <p
        class="text-[#9B9E9E] md:text-2xl text-xl md:leading-[3rem] md:font-semibold font-medium mb-4"
      >
        مؤسسة وقفية تعني بالتأصيل العقدي، ورفع الوعي بخطورة الفكر الروحاني
        الحديث من خلال تقديم الدراسات والبحوث المتخصصة والانشطة والمشاريع
        النوعية
      </p>
      <form class="md:space-y-14 mt-10">
        <div class="w-full">
          <label for="name" class="block my-6 text-[#10526B] text-xl font-semibold">الاسم</label>
          <input
            type="text"
            id="name"
            placeholder="اكتب هنا"
            class="w-full font-semibold bg-[#c7e0dcc7] text-[#9B9E9E] placeholder-[#9B9E9E] px-4 py-2 rounded-xl shadow-md focus:outline-none focus:ring-none placeholder-[#10526B]"
          />
        </div>
        <div class="flex justify-between md:flex-row flex-col md:mb-0 mb-6">
          <div class="md:w-5/12">
            <label for="email" class="block my-6 text-[#10526B] text-xl font-semibold">البريد الإلكتروني</label>
            <input
              type="email"
              id="email"
              placeholder="اكتب هنا"
              class="w-full font-semibold bg-[#c7e0dcc7] text-[#9B9E9E] placeholder-[#9B9E9E] px-4 py-2 rounded-xl shadow-md focus:outline-none focus:ring-none placeholder-[#10526B]"
            />
          </div>
          <div class="md:w-5/12">
            <label for="phone" class="block my-6 text-[#10526B] text-xl font-semibold">رقم الجوال</label>
            <input
              type="text"
              id="phone"
              placeholder="اكتب هنا"
              class="w-full font-semibold bg-[#c7e0dcc7] text-[#9B9E9E] placeholder-[#9B9E9E] px-4 py-2 rounded-xl shadow-md focus:outline-none focus:ring-none placeholder-[#10526B]"
            />
          </div>
        </div>

        <div class="w-full relative">
          <label for="country" class=" text-[#10526B] text-xl font-semibold md:my-0 my-6">الدولة</label>
          <span class="font-semibold px-2 text-rose-500">*</span>
       
          <select
            id="country"
            class="w-full font-semibold bg-[#c7e0dcc7] text-[#9B9E9E] placeholder-[#10526B] mt-6 px-4 py-2 rounded-xl shadow-md focus:outline-none focus:ring-none appearance-none"
          >
            <option value="">اختر</option>
            <!-- Add more options as needed -->
          </select>
          <div class="absolute bottom-1 left-3 flex items-center pointer-events-none ">
            <svg class="w-7 h-7 fill-current text-[#10526B]" viewBox="0 0 20 20">
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </div>
        </div>
        <div>
          <span class="block md:my-2 my-6 text-[#10526B] text-xl font-semibold">نوع الانتساب</span>
          <label class="inline-flex items-center ">
            <input
              type="radio"
              name="membership"
              value="وظيفي"
              class="form-radio-square text-[#10526B] focus:ring-[#10526B] ml-3"
            />
            <span class="ml-2 my-2 text-[#10526B] text-xl font-semibold">وظيفي</span>
          </label>
          <label class="inline-flex items-center mr-10">
            <input
              type="radio"
              name="membership"
              value="تطوعي"
              class="form-radio-square text-[#10526B] focus:ring-[#10526B] ml-3"
            />
            <span class="ml-2 my-2 text-[#10526B] text-xl font-semibold">تطوعي</span>
          </label>
        </div>
        <div class="flex justify-end mt-8">
          <button
            type="submit"
            class="bg-[#BEAE73] text-white p-2 rounded shadow-md hover:bg-[#a89c63] focus:outline-none focus:ring-2 focus:ring-[#BEAE73]"
          >
            <img
              src="telegram.png"
              alt="Submit Icon"
              class="inline w-5 h-5 brightness-200"
            />
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup></script>


<style scoped>
/* Customize the radio button to be square */
.form-radio-square {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  width: 1.5em;
  height: 1.5em;
  background-color: #D9D9D980;
  border-radius: 0.2em;
  display: inline-block;
  position: relative;
}

.form-radio-square:checked {
  background-color: #10526b;
  border-color: #10526b;
}

.form-radio-square:checked::before {
  content: '';
  width: 0.5em;
  height: 0.5em;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 0.1em;
}
</style>