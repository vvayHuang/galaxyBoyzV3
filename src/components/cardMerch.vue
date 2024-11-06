<script setup>
import { RouterLink, RouterView } from "vue-router";
import { defineProps } from "vue";
import shopData from "../data/shop";

const { shops, category } = shopData;
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
const displayedShop = props.limit ? shops.slice(0, props.limit) : shops;
</script>
<template>
  <li
    v-for="shops in displayedShop"
    :key="shops.id"
    class="group relative"
  >
    <div
      class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded bg-gray-200 lg:aspect-none lg:h-80"
    >
      <img
        :src="shops.imageSrc"
        :alt="shops.imageAlt"
        class="h-full w-full object-cover object-center lg:h-full lg:w-full"
      />
    </div>
    <div class="absolute bg-surface flex group-hover:opacity-75 inset-0 justify-center items-center opacity-0 p-3 rounded">
      <h3 class="text-title-1 font-body font-bold hid">
        {{ shops.name }}
      </h3>
    </div>
    <RouterLink :to="shops.href">
      <span aria-hidden="true" class="absolute inset-0" />
    </RouterLink>
  </li>
  <router-view></router-view>
</template>
