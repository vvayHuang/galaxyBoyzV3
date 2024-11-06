<script setup>
const { caption, mainTitle, subTitle,  paragraph, captionStyle,mainTitleStyle,subTitleStyle,paragraphStyle, } = defineProps({
  caption: String,
  mainTitle: String,
  subTitle: String,
  paragraph:String,
  captionStyle: String,
  mainTitleStyle: String,
  subTitleStyle: String,
  paragraphStyle: String,
});
</script>
<template>
  <span v-if="caption" class="text-surface-on mb-2" :class="captionStyle">{{ caption }}</span>
  <h2 v-if="mainTitle" class="text-ellipsis text-display-1 text-center md:mb-6" :class="mainTitleStyle">
    {{ mainTitle }}
  </h2>
  <h3 v-if="subTitle" class="text-display-3" :class="subTitleStyle">{{ subTitle }}</h3>
  <p v-if="paragraph" :class="paragraphStyle">{{ paragraph  }}</p>
</template>
