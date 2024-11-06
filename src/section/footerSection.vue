<script setup>
import LogoHorizontal from "../components/logoHorizontal.vue";
</script>

<template>
  <footer class="bg-surface-inverse md:py-12 py-6">
    <div class="container">
      <div class="flex md:justify-end lg:items-end flex-col lg:flex-row">
        <div class="basis-auto">
          <ul class="flex lg:flex-col justify-between mb-6 gap-2 md:gap-0">
            <li>
              <div class="text-surface-on-inverse md:mb-6 md:me-0">
                <h4 class="text-title-2 mb-3 font-body font-bold">sitemap</h4>
                <ul class="grid gap-3">
                  <li>
                    <RouterLink to="/">home</RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/news">news</RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/shows">shows</RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/release">release</RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/shop">shop</RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/info">info</RouterLink>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div class="text-surface-on-inverse md:mb-6 me-2 md:me-0">
                <h4 class="text-title-2 mb-3 font-body font-bold">
                  social media
                </h4>
                <ul class="grid gap-3">
                  <li>
                    <a href="#">facebook</a>
                  </li>
                  <li>
                    <a href="#">instagram</a>
                  </li>
                  <li>
                    <a href="#">X</a>
                  </li>
                  <li>
                    <a href="#">youtube</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div class="text-surface-on-inverse me-6">
                <h4 class="text-title-2 mb-3 font-body font-bold">mail</h4>
                <ul class="grid gap-3">
                  <li>
                    <a href="mailto:galaxyboyz@gmail.com"
                      >galaxyboyz@gmail.com</a
                    >
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div class="basis-auto">
          <div class="flex justify-between md:justify-start mb-6">
            <p class="text-surface-on-inverse md:me-12">
              Copyright © 2024 GalaxyBoyz
            </p>
            <p class="text-surface-on-inverse">Site by wayhuang</p>
          </div>
        </div>
      </div>
    </div>
    <LogoHorizontal class="w-full h-full" />
  </footer>
</template>
<style scoped>
::v-deep .galaxyboyz{
  @apply text-surface-on-inverse
}
</style>
