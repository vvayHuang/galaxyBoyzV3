<script setup>
import { RouterLink, RouterView } from "vue-router";
import { defineProps } from "vue";
import releaseData from "../data/release";

const { releases, category } = releaseData;
const props = defineProps({
  limit: {
    type: Number,
    default: null, // 預設顯示所有資料
  },
  music: {
    type: Object,
    required: true,
  },
});

// 使用 limit prop 限制顯示的項目
const displayedRelease = props.limit ? releases.slice(0, props.limit) : releases;
</script>
<template>
  <li
    v-for="release in displayedRelease"
    :key="release.id"
    class="group relative"
  >
    <div
      class="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 lg:aspect-none lg:h-80 rounded-t xl:h-[424px]"
    >
      <img
        :src="release.imageSrc"
        :alt="release.imageAlt"
        class="h-full w-full object-cover object-center lg:h-full lg:w-full"
      />
    </div>
    <div class="flex justify-between p-6 bg-surface rounded-b">
      <h3 class="xl:text-title-1 font-body font-bold">
        <RouterLink :to="release.href">
          <span aria-hidden="true" class="absolute inset-0" />
          {{ release.name }}
        </RouterLink>
      </h3>
    </div>
  </li>
  <router-view></router-view>
</template>
