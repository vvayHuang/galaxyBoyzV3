<script setup>
import { defineProps } from "vue";
import news from "@/data/news";

const props = defineProps({
  limit: {
    type: Number,
    default: null, // 預設顯示所有資料
  },
  newsData: {
    type: Array,
    required: true,
  },
});

// 使用 limit prop 限制顯示的項目
const displayedNews = props.limit ? props.newsData.slice(0, props.limit) : props.newsData;
</script>
<template>
  <li v-for="news in displayedNews" :key="news.id">
    <div class="rounded overflow-hidden flex flex-col h-full">
      <div class="">
        <img
          class="w-full h-full object-cover"
          :src="news.imageSrc"
          :alt="news.imageAlt"
        />
      </div>
      <div class="bg-surface xl:p-8 md:p-4 p-2 h-full">
        <h3
          class="xl:text-title-1 font-body font-bold xl:h-[84px] mb-2 line-clamp-2 leading-relaxed"
        >
          {{ news.title }}
        </h3>
        <p class="text-body-2 text-surface-on mb-2">{{ news.date }}</p>
        <p class="text-body-1 text-surface-on mb-2 truncate overflow-hidden">
          {{ news.caption }}
        </p>
        <a :href="news.href" class="text-body-2 xl:text-body-1">read</a>
      </div>
    </div>
  </li>
</template>
