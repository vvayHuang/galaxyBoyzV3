<script setup>
import ArrowForward from "./icons/arrowForward.vue";

const { text, href, buttonStyle } = defineProps({
  text: String,
  href: String,
  buttonStyle: String,
  showIcon: {
    type: Boolean,
    default: false,
  },
});
</script>
<template>
  <a :class="[buttonStyle]" :href="[href]"><ArrowForward class=" inline-block me-2" v-if="showIcon"/>{{ text }}</a>
</template>
<style scoped>
.btn-primary {
  @apply inline-block text-center bg-primary leading-5 text-primary-on py-4 md:px-6 px-4 rounded text-label-1 hover:drop-shadow-1;
}
.btn-text {
  @apply inline-block text-center leading-5 p-4 rounded text-label-1 hover:drop-shadow-1;
}
.btn-primary-outline {
  @apply inline-block text-center text-label-1 border leading-5 rounded text-primary border-outline overflow-hidden hover:bg-primary-state-opacity-.12 p-4 md:px-6 px-4 focus:border-primary disabled:border-primary-state-opacity-.12 disabled:bg-primary-state-opacity-.12 disabled:text-surface-on;
}
</style>
