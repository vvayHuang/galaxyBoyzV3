<script setup>
import Navbar from "@/components/navbar.vue";
import showsData from "@/data/shows";
import ListItemShow from "../../components/listItemShow.vue";

// 解構 shows 和 category
const { shows, category } = showsData;
</script>

<template>
  <Navbar />
  <section class="md:py-20 py-12">
    <div class="container">
      <div class="flex lg:flex-row flex-col gap-6">
        <div class="basis-3/12">
          <ul
            class="lg:p-8 p-6 bg-surface rounded gap-6 flex flex-col text-center lg:text-start"
          >
            <li v-for="category in category" :key="category.id">
              <a href="#" class="text-title-1 font-bold">{{ category.name }}</a>
            </li>
          </ul>
        </div>
        <div class="basis-9/12">
          <ul class="grid md:gap-3 gap-4 mb-11 lg:p-8 p-4 bg-surface rounded">
            <ListItemShow/>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
