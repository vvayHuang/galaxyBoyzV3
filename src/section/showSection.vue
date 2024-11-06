<script setup>
import SectionText from "../components/sectionText.vue";
import Buttons from "../components/buttons.vue";
import listItemShow from "../components/listItemShow.vue";

</script>
<template>
  <section class="bg-[#2B2422] py-20">
    <div class="container">
      <SectionText class="SectionText" mainTitle="show" :mainTitleStyle="['text-surface-on-inverse','dark:text-surface-on']"/>
      <ul class="grid md:gap-3 gap-4 mb-11 lg:p-8 p-4">
        <listItemShow :limit="4" :textStyle="['text-surface-on-inverse','dark:text-surface-on']"/>
      </ul>
      <div class="text-center text-surface-on-inverse dark:text-surface-on">
        <span class="me-2">Browse specially curated shows</span
        ><Buttons text="view more" :class="['btn-text']" :showIcon="true" :href="['/shows']"/>
      </div>
    </div>
  </section>
</template>