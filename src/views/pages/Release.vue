<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "@/components/Navbar.vue";
import releaseData from "@/data/release";
import CardMusic from "../../components/cardMusic.vue";

const { category } = releaseData;
</script>
<template>
  <Navbar />
  <section class="md:py-20 py-12" v-if="$route.path === '/release'">
    <div class="container">
      <div class="flex lg:flex-row flex-col gap-6 justify-between">
        <div class="basis-3/12">
          <ul
            class="lg:p-8 p-6 bg-surface rounded gap-6 flex lg:flex-col flex-row text-center lg:text-start"
          >
            <li v-for="category in category" :key="category.id">
              <a href="#" class="text-title-1 font-bold block">{{
                category.name
              }}</a>
            </li>
          </ul>
        </div>
        <div class="basis-8/12">
          <nav>
            <ul class="grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-4">
              <CardMusic/>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </section>
  <RouterView />
</template>
