<template>
  <section class="lg:mx-32">
    <div class="flex justify-center lg:flex-row flex-col items-start md:p-10 md:pt-24 pt-2 p-1 custom-scrollbar">
      <div class="lg:w-1/3 w-full lg:order-none order-last bg-white sm:shadow-lg lg:rounded-s-lg rounded-s-none lg:rounded-none rounded-lg sm:border lg:h-[450px] h-full overflow-x-auto lg:mt-0 mt-5 ">
        <div class="bg-[#10526B] text-white p-4 lg:rounded-tr-lg rounded-tr-none lg:rounded-none rounded-lg ">
          <h2 class="text-lg font-semibold">يوتيوب البيضاء</h2>
          <p class="text-sm">30 دقيقة | 22:17 | 23-2-2023</p>
        </div>
        <div class="sm:px-10 py-8">
          <div
            v-for="(video, index) in videos"
            :key="index"
            class="flex items-center mb-4 cursor-pointer gap-2"
            @click="playVideo(video.url)"
          >
            <img
              :src="video.thumbnail"
              alt="Thumbnail"
              class="w-6/12"
            />
            <div class="ml-4">
              <h3 class="text-sm font-semibold">{{ video.title }}</h3>
              <p class="text-xs text-gray-500">{{ video.duration }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:flex-1 w-full sm:mt-0 mt-5">
        <iframe
          width="100%"
          height="450"
          :src="currentVideoUrl"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          class="lg:rounded-e-lg rounded-e-none lg:rounded-none rounded-lg"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

// Default video URL
const currentVideoUrl = ref(
  "https://www.youtube.com/embed/vWqyB58BTng?si=OY_TUGR5PPs08oks"
);

const videos = [
  {
    title: "المقطع الصوتي الأول",
    thumbnail: "/Framevideo.png",
    duration: "11:45",
    url: "https://www.youtube.com/embed/DiF8RUHNiQc?si=U1s-EFZ-XEIaqQK6",
  },
  {
    title: "المقطع الصوتي الثاني",
    thumbnail: "/Framevideo.png",
    duration: "10:00",
    url: "https://www.youtube.com/embed/sz0zcB7a0zU?si=5_TU2tQy2LFLXR_w",
  },
  {
    title: "المقطع الصوتي الثاني",
    thumbnail: "/Framevideo.png",
    duration: "10:00",
    url: "https://www.youtube.com/embed/sz0zcB7a0zU?si=5_TU2tQy2LFLXR_w",
  },
  {
    title: "المقطع الصوتي الثاني",
    thumbnail: "/Framevideo.png",
    duration: "10:00",
    url: "https://www.youtube.com/embed/sz0zcB7a0zU?si=5_TU2tQy2LFLXR_w",
  },
  {
    title: "المقطع الصوتي الثالث",
    thumbnail: "/Framevideo.png",
    duration: "12:30",
    url: "https://www.youtube.com/embed/DiF8RUHNiQc?si=U1s-EFZ-XEIaqQK6",
  },
];

function playVideo(url) {
  currentVideoUrl.value = url;
}
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #BEAE7366;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #beae73;
  border-radius: 10px;
  border: 2px solid #f5f5f5;
}

/* Firefox */
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: #beae73 #BEAE7366;
}
</style>
