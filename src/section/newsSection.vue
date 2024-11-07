<script setup>
import SectionText from "../components/sectionText.vue";
import Buttons from "../components/buttons.vue";
import CardNews from "../components/cardNews.vue";
import newsData from "@/data/news";
</script>
<template>
  <section class="py-20">
    <div class="container flex flex-col justify-center h-full">
      <SectionText mainTitle="news" />
      <ul class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mb-6">
        <CardNews  :newsData="newsData.slice(1,4)" />
      </ul>
      <div class="text-center mb-6">
        <span class="me-2">Check out all news</span
        ><RouterLink to="/news"
          ><Buttons text=" view more" :class="['btn-text']" :showIcon="true"
        /></RouterLink>
      </div>
    </div>
  </section>
</template>
