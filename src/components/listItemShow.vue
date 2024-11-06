<script setup>
import { defineProps } from 'vue';
import showData from "@/data/shows";
import Buttons from "@/components/buttons.vue";

const { shows, category } = showData

const props = defineProps({
  limit: {
    type: Number,
    default: null, // 預設顯示所有資料
  },
  textStyle: String,
});

// 使用 limit prop 限制顯示的項目
const displayedShow = props.limit ? shows.slice(0, props.limit) : shows;
</script>

<template>
  <li v-for="show in displayedShow" :key="shows.id">
    <div
      class="flex flex-col md:flex-row gap-6 border-b pt-2 pb-7 border-outline-variant"
    >
      <div class="basis-full">
        <div class="flex md:flex-row flex-col flex-grow justify-between gap-6 text-surface-on" :class="textStyle">
          <div class="basis-full">
            <div
              class="flex flex-col md:flex-row items-center md:items-start gap-6"
            >
              <div class="basis-auto">
                <p>{{ show.date }}</p>
              </div>
              <div class="basis-1/2">
                <p class="text-center md:text-start">
                  {{ show.venue }}
                </p>
                <p class="text-center md:text-start">
                  {{ show.guest }}
                </p>
              </div>
            </div>
          </div>
          <div class="basis-full">
            <p class="text-center md:text-start">
              {{ show.location }}
            </p>
          </div>
        </div>
      </div>
      <div class="basis-1/4">
        <div class=" flex justify-center md:justify-end"><Buttons text="buy ticket" :class="['btn-primary']" /></div>
      </div>
    </div>
  </li>
</template>
