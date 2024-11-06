<script setup>
import NavBar from "@/components/Navbar.vue";
import HeroSEction from "@/section/heroSEction.vue";
import ShowSection from "@/section/showSection.vue";
import MusicSection from "@/section/musicSection.vue";
import MerchSection from "@/section/merchSection.vue";
import NewsSection from "@/section/newsSection.vue";
import SubscribeSection from "@/section/subscribeSection.vue";
</script>

<template>
  <NavBar
    class="lg:absolute fixed inset-x-0 text-surface-on-inverse dark:text-surface-on bg-transparent z-10"
  />
  <HeroSEction />
  <ShowSection/>
  <MusicSection />
  <MerchSection />
  <NewsSection />
  <SubscribeSection />
</template>
<style scoped>
::v-deep .galaxyboyz{
  @apply text-surface-on-inverse dark:text-surface-on
}
::v-deep .star {
  @apply text-primary-inverse text-primary;
}
::v-deep .burgerMenu {
  @apply text-surface-on-inverse dark:text-surface-on;
}
::v-deep .navLink {
  @apply text-surface-on dark:text-surface-inverse md:text-surface-on-inverse;
}
</style>
