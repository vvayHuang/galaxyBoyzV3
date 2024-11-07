<script setup>
import Buttons from "../components/buttons.vue";
import CardMerch from "../components/cardMerch.vue";
import Carousel from "../components/carouselX.vue";
import SectionText from "../components/sectionText.vue";
</script>

<template>
  <section class="bg-[#E56E31] lg:h-[1117px] py-20 flex flex-col justify-center">
    <Carousel class="hidden lg:block" />
    <div class="container flex flex-col justify-center order-1 md:order-2">
      <SectionText
        mainTitle="merch"
        :main-title-style="['text-surface-on-inverse']"
      />
      <div class="text-center text-surface-on mb-6">
        <span class="me-2 text-surface-on-inverse"
          >Browse specially curated products</span
        >
        <RouterLink to="/shop">
          <Buttons
            text="view more"
            :class="['btn-text', 'text-surface-on-inverse']"
            :showIcon="true"
          />
        </RouterLink>
      </div>
      <ul class="grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-4 lg:hidden">
        <CardMerch :limit="4" />
      </ul>
    </div>
  </section>
</template>
