<template>
  <transition name="fade">
    <div
      v-if="show"
      class="fixed inset-0 flex items-center justify-center z-50 w-9/12 h-4/5 m-auto overflow-hidden"
    >
      <div class="fixed inset-0 bg-black opacity-50" @click="closeModal"></div>
      <div
        class="relative flex flex-col items-center justify-center h-screen bg-[url('bggroup.png')] bg-cover w-full"
      >
        <div class="text-center z-50">
          <img
            src="hourglass.png"
            alt="Hourglass"
            class="mx-auto mb-6 w-24 h-24"
          />
          <h1 class="text-4xl text-white font-semibold mb-6">قريبا</h1>
          <nuxt-link
            to="/home"
            class="inline-block bg-[#BEAE73] text-white py-2 px-6 rounded-lg md:text-xl"
          >
            العودة للصفحة الرئيسية
          </nuxt-link>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "",
    },
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
