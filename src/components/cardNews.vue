<script setup>
import { defineProps } from 'vue';
import news from "@/data/news";

const props = defineProps({
  limit: {
    type: Number,
    default: null, // 預設顯示所有資料
  },
});

// 使用 limit prop 限制顯示的項目
const displayedNews = props.limit ? news.slice(0, props.limit) : news;
</script>
<template>
  <li v-for="news in displayedNews" :key="news.id">
      <div class="rounded overflow-hidden">
        <div class="h-[393px]">
          <img
            class="w-full h-full object-cover"
            :src="news.imageSrc"
            :alt="news.imageAlt"
          />
        </div>
        <div class="bg-surface lg:p-8 p-4">
          <h3 class="text-title-1 font-body font-bold xl:h-[84px] mb-2">
            {{ news.title }}
          </h3>
          <p class="text-body-2 text-surface-on mb-2">{{ news.date }}</p>
          <p class="text-body-1 text-surface-on mb-2 truncate overflow-hidden">{{ news.caption }}</p>
          <a :href="news.href">read</a>
        </div>
      </div>
  </li>
</template>
