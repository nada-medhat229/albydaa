<template>
  <section>
    <header class="w-full headerhome z-[10] relative">
      <div id="overlay"></div>
      <!-- Navbar -->
      <client-only>

      <Disclosure as="nav" v-slot="{ open }" class="relative container">
        <div class="mx-auto max-w-8xl mx-2 md:px-6 lg:px-8">
          <div class="relative flex h-20 items-center justify-between z-[111]">
            <div class="flex items-center justify-between md:hidden w-full">
              <!-- Mobile menu button-->
              <img
                class="h-12 w-12"
                src="/assets/images/logo.png"
                alt="Your Company"
              />
              <DisclosureButton
                class="justify-center rounded-md p-2 text-white focus:outline-none"
              >
                <span class="absolute -inset-0.5" />
                <span class="sr-only">Open main menu</span>
                <Bars3Icon
                  v-if="!open"
                  class="block h-9 w-8"
                  aria-hidden="true"
                />
                <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
              </DisclosureButton>
            </div>

            <div class="hidden md:block">
              <img
                class="h-20 w-20"
                src="/assets/images/logo.png"
                alt="Your Company"
              />
            </div>
            <div class="hidden lg:ml-6 md:ml-2 md:block">
              <div class="flex">
                <div
                  v-for="item in navigation"
                  :key="item.name"
                  class="relative group"
                >
                  <a
                    :href="item.href"
                    :class="[
                      item.current ? 'text-[#9B9E9E]' : 'text-white',
                      'rounded-md  lg:px-3 ml-1 py-2 px-1 font-medium text-base',
                    ]"
                    :aria-current="item.current ? 'page' : undefined"
                    >{{ item.name }}</a
                  >
                  <div
                    v-if="item.submenu"
                    class="submenu absolute hidden group-hover:block bg-white text-black rounded-md mt-2 px-5 w-[200px]"
                  >
                    <ul>
                      <li
                        v-for="subItem in item.submenu"
                        :key="subItem.name"
                        class="p-3 text-center font-semibold addsty hover:text-[#10526B]"
                      >
                        <a :href="subItem.href">{{ subItem.name }}</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex items-center md:static hidden md:block">
              <img
                class="h-9 w-8 rounded-full"
                src="/assets/images/loupe.png"
              />
            </div>
          </div>
        </div>

        <DisclosurePanel class="md:hidden iteminmobaile">
          <div class="space-y-1 mx-2 pb-3 pt-2 relative group">
            <DisclosureButton
              v-for="item in navigation"
              :key="item.name"
              as="a"
              :href="item.href"
              :class="[
                item.current ? 'text-[#9B9E9E]' : 'text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              ]"
              :aria-current="item.current ? 'page' : undefined"
            >
              {{ item.name }}
              <div
                v-if="item.submenu"
                class="submenu absolute hidden group-hover:block bg-white text-black rounded-md mt-2 px-5 w-[170px]"
              >
                <ul>
                  <li
                    v-for="subItem in item.submenu"
                    :key="subItem.name"
                    class="p-3 font-semibold addsty hover:text-[#10526B]"
                  >
                    <a :href="subItem.href">{{ subItem.name }}</a>
                  </li>
                </ul>
              </div>
            </DisclosureButton>
          </div>
        </DisclosurePanel>
      </Disclosure>
      </client-only>

      <div
        class="page-title flex items-center justify-center text-center h-[90%] z-[10] relative"
      >
        <div class="w-[800px]">
          <h1 class="md:text-7xl text-5xl font-bold text-white pb-6">
            {{ pagetitle.title }}
          </h1>
          <p class="text-white md:text-3xl text-xl pb-6 lg:leading-[3.5rem]">
            {{ pagetitle.content }}
          </p>
          <button class="btn-main">{{ pagetitle.buttoncontent }}</button>
        </div>
      </div>
    </header>
    <div class="py-7 bg-[#0B4F69]">
      <div class="container flex justify-end">
        <a href="#">
          <img
            src="../assets/images/youtube.png"
            class="sm:w-7 sm:h-8 w-6 h-7 sm:mx-2 mx-1 object-contain"
          />
        </a>
        <a href="#">
          <img
            src="../assets/images/face.png"
            class="sm:w-7 sm:h-8 w-6 h-7 sm:mx-2 mx-1 object-contain"
          />
        </a>
        <a href="#">
          <img
            src="../assets/images/instagram.png"
            class="sm:w-7 sm:h-8 w-6 h-7 sm:mx-2 mx-1 object-contain"
          />
        </a>
        <a href="#">
          <img
            src="../assets/images/cast.png"
            class="sm:w-7 sm:h-8 w-6 h-7 sm:mx-2 mx-1 object-contain"
          />
        </a>
        <a href="#">
          <img
            src="../assets/images/audio.png"
            class="sm:w-7 sm:h-8 w-6 h-7 sm:mx-2 mx-1 object-contain"
          />
        </a>
        <a href="#">
          <img
            src="../assets/images/twitter.png"
            class="sm:w-6 sm:h-7 w-5 h-6 sm:mx-2 mx-1 object-contain"
          />
        </a>
        <a href="#">
          <img
            src="../assets/images/snap.png"
            class="sm:w-7 sm:h-8 w-6 h-7 sm:mx-2 mx-1 object-contain"
          />
        </a>
      </div>
    </div>

    <main>
      <slot />
    </main>
    <footer>
      <section class="text-center md:my-12 my-6">
        <img src="/footlogo.png" class="w-40 h-40 m-auto" alt="" />
        <p class="text-2xl text-[#9B9E9E] lg:w-1/3 sm:w-1/2 w-full pt-3 m-auto">
          مؤسسة وقفية تعني بالتأصيل العقدي ، ورفع الوعي بخطورة الفكر الروحاني
          الحديث
        </p>
        <div class="container flex justify-center md:py-10 py-6">
          <a href="#">
            <img
              src="/telegram.png"
              class="sm:w-7 sm:h-8 w-6 h-7 sm:mx-4 mx-1 object-contain"
            />
          </a>
          <a href="#">
            <img
              src="/youtube.png"
              class="sm:w-7 sm:h-8 w-6 h-7 sm:mx-4 mx-1 object-contain"
            />
          </a>
          <a href="#">
            <img
              src="/face.png"
              class="sm:w-7 sm:h-8 w-6 h-7 sm:mx-4 mx-1 object-contain"
            />
          </a>
          <a href="#">
            <img
              src="/instagram.png"
              class="sm:w-7 sm:h-8 w-6 h-7 sm:mx-4 mx-1 object-contain"
            />
          </a>
          <a href="#">
            <img
              src="/cast.png"
              class="sm:w-7 sm:h-8 w-6 h-7 sm:mx-4 mx-1 object-contain"
            />
          </a>
          <a href="#">
            <img
              src="/audio.png"
              class="sm:w-7 sm:h-8 w-6 h-7 sm:mx-4 mx-1 object-contain"
            />
          </a>
          <a href="#">
            <img
              src="/twitter.png"
              class="sm:w-6 sm:h-7 w-5 h-6 sm:mx-4 mx-1 object-contain"
            />
          </a>
          <a href="#">
            <img
              src="/snap.png"
              class="sm:w-7 sm:h-8 w-6 h-7 sm:mx-4 mx-1 object-contain"
            />
          </a>
        </div>
      </section>
      <section class="bg-[#0B4F69] py-8">
        <div class="container flex flex-wrap justify-center">
          <a
            v-for="item in navfooter"
            :key="item.name"
            :href="item.href"
            class="navfoot md:px-5 px-3 sm:my-0 my-3 text-white font-medium md:text-xl text-base"
            >{{ item.name }}</a
          >
        </div>
      </section>
    </footer>
  </section>
</template>

<script setup>
import "../node_modules/@fortawesome/fontawesome-free/css/fontawesome.min.css";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/vue/24/outline";
const pagetitle = {
  title: "البيضاء",
  content:
    "مؤسسة وقفية تعني بالتأصيل العقدي، ورفع الوعي بخطورة  الفكر الروحاني الحديث من خلال تقديم الدراسات والبحوث المتخصصة والانشطة والمشاريع النوعية",
  buttoncontent: "تعرف أكثر",
};
const navigation = [
  { name: "الرئيسية", href: "/", current: true },
  {
    name: "من نحن",
    href: "#",
    current: false,
    submenu: [
      { name: "التعريف بالبيضاء", href: "/about/albydaa" },
      { name: "قالو عن البيضاء", href: "/about/definition" },
    ],
  },
  {
    name: "المكتبة العلمية",
    href: "",
    current: false,
    submenu: [
      { name: "المقالات ", href: "/library/articles" },
      { name: "كتب متخصصة", href: "/library/specializedbooks" },
      { name: "البحوث", href: "/library/research" },
      { name: "معجم المصطلحات", href: "/library/glossary" },
    ],
  },
  {
    name: "خدماتنا",
    href: "",
    current: false,
    submenu: [
      { name: "اسأل البيضاء ", href: "/service/question" },
      { name: "طلب استشارة", href: "/service/consultation" },
      { name: "مشاريعنا", href: "/service/project" },
      { name: "المتجر", href: "#" },
    ],
  },
  {
    name: "نتاج البيضاء",
    href: "",
    current: false,
    submenu: [
      { name: "بودكاست خط", href: "/results/linepotcast" },
      { name: "يوتيوب البيضاء", href: "/results/youtube" },
      { name: "حقائب علمية", href: "/results/scientific" },
    ],
  },
  { name: "كيف تدعمنا", href: "/join", current: false },
  { name: "دورات البيضاء", href: "#", current: false },
];
const navfooter = [
  { name: "من نحن", href: "#", current: false },
  { name: "مشاريعنا", href: "#", current: false },
  { name: "كيف تدعمنا", href: "#", current: false },
  { name: "يوتيوب البيضاء", href: "#", current: false },
  { name: "بودكاست خط", href: "#", current: false },
];
</script>
<style>
.addsty:not(:last-child) {
  border-bottom: 1px solid #2424243b;
}
.group:hover .submenu {
  display: block;
}
.headerhome {
  background: url("../assets/images/layout.png");
  height: 650px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.iteminmobaile {
  position: absolute;
  width: 100%;
  background: var(--main-color);
  z-index: 555;
  top: 80%;
}
.navfoot:not(:last-child) {
  border-left: 1px solid #ffffff;
}
</style>
