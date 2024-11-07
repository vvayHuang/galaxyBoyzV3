<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "@/components/Navbar.vue";
import newsData from "../../data/news";
import CardNews from "@/components/cardNews.vue";
</script>
<template>
  <Navbar />
  <section v-if="$route.path === '/news'">
    <div class="bg-surface">
      <div
        class="px-4 lg:px-[52px] py-8"
        v-for="(news, index) in newsData.slice(0, 1)"
        :key="news.id"
      >
        <div class="rounded overflow-hidden">
          <img
            class="object-cover h-[303.5px] md:h-full w-full"
            :src="news.imageSrc"
            :alt="news.imageAlt"
          />
        </div>
        <div class="md:p-8 p-6">
          <h2 class="text-background-on text-display-2 md:mb-8 mb-6">
            GalaxyBoyz Launches Stellar World Tour
          </h2>
          <p class="mb-2">
            The cosmic journey begins as GalaxyBoyz announces their highly
            anticipated world tour, promising an out-of-this-world musical
            experience that transcends boundaries. Fans around the globe are
            gearing up to witness their electrifying performances that blend
            genres like stars converging in the night sky.
          </p>
          <RouterLink to="/news/post">read</RouterLink>
        </div>
      </div>
    </div>
    <div class="px-4 lg:px-[52px] md:py-20 py-6">
      <ul class="grid md:grid-cols-3 grid-cols-1 lg:gap-6 md:gap-4 mb-6">
        <CardNews :newsData="newsData.slice(1)"/>
      </ul>
    </div>
  </section>
  <RouterView />
</template>
