<script setup>
import { RouterLink } from "vue-router";
import sitemap from "../data/sitemap";
</script>
<template>
  <li
    v-for="sitemap in sitemap"
    :key="sitemap.id"
    class="md:px-2 md:py-3 pb-2 mb-10 md:mb-0 justify-start items-center gap-2 flex"
  >
    <RouterLink
      :to="sitemap.href"
      class="navLink text-title-1 md:text-body-1 font-medium leading-none"
      >{{ sitemap.title }}</RouterLink
    >
  </li>
</template>
