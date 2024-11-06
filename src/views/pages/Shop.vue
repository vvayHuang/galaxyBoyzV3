<script setup>
import { RouterView } from "vue-router";
import Navbar from "@/components/Navbar.vue";
import shopData from "@/data/shop";

const { shops, category } = shopData;
</script>
<template>
  <Navbar />
  <section class="md:py-20 py-12" v-if="$route.path === '/shop'">
    <div class="container">
      <div class="flex lg:flex-row flex-col gap-6 justify-between">
        <div class="basis-3/12">
          <ul
            class="lg:p-8 p-6 bg-surface rounded gap-6 flex lg:flex-col flex-row text-center lg:text-start"
          >
            <li v-for="category in category" :key="category.id">
              <a href="#" class="text-title-1 font-bold block">{{ category.name}}</a>
            </li>
          </ul>
        </div>
        <div class="basis-8/12">
          <nav>
            <ul class="grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-4">
              <li v-for="shop in shops" :key="shops.id">
                <div class="rounded bg-surface overflow-hidden">
                  <img
                    class="w-full object-cover"
                    :src="shop.imageSrc"
                    :alt="shop.imageAlt"
                  />
                  <div class="p-8 border-b">
                    <h3 class="text-title-1 font-body font-bold">
                      {{ shop.name }}
                    </h3>
                  </div>
                  <div class="p-8 flex justify-between">
                    <RouterLink :to="shop.href">view product</RouterLink>
                    <div class="flex">
                      <p class="me-2">{{ shop.price }}</p>
                      <span class="text-body-3">NTD</span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </section>
  <RouterView />
</template>
