<script setup>
import Buttons from "../components/buttons.vue";
import CardMusic from "../components/cardMusic.vue";
import CarouselY from "../components/carouselY.vue";
import SectionText from '../components/sectionText.vue';
</script>

<template>
  <section class="bg-[#2B2422] relative overflow-hidden lg:h-[1117px] py-20">
    <div class="container">
     <SectionText mainTitle="music" :main-title-style="['text-surface-on-inverse','dark:text-surface-on']"/>
      <div class="text-center text-surface-on-inverse dark:text-surface-on mb-6">
        <span>Browse curated music</span>
        <RouterLink to="/release"><Buttons text="view more" :class="['btn-text']" :showIcon="true"/></RouterLink>
      </div>
      <div class="justify-center items-center flex">
        <RouterLink to="/release/music" class=" hidden lg:flex">
          <img
            class="object-cover"
            src="https://github.com/vvayHuang/galaxyBoyzV3/blob/main/public/images/release/day-of-our-lives.png?raw=true"
            alt="cd-cover"
          />
        </RouterLink>
        <ul class=" grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-4 lg:hidden">
         <CardMusic :limit="4"/>
        </ul>
      </div>
    </div>
    <div class=" absolute h-full top-0 hidden lg:block"><CarouselY/></div>
    <div class=" absolute h-full top-0 end-0 hidden lg:block"><CarouselY/></div>
  </section>
</template>
