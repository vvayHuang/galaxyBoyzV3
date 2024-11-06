<script setup>
import Buttons from '../components/buttons.vue';
</script>

<template>
  <section
    class="lg:h-lvh h-[1037px] flex-col justify-center items-center gap-12 flex hero bg-surface-inverse dark:bg-surface py-20"
  >
    <div
      class="container justify-center items-center md:gap-6 gap-3 flex md:flex-row flex-col"
    >
      <div class="justify-start items-center gap-2.5 flex">
        <div class="w-full justify-between items-center flex">
          <img
            class="grow shrink basis-0 self-stretch object-cover"
            src="../assets/images/release/day-of-our-lives.png"
            alt="cd-cover"
          />
        </div>
      </div>
      <div class="flex-col justify-center items-start gap-6 flex">
        <h2
          class="md:text-center text-surface-on-inverse dark:text-surface-inverse text-display-2 font-normal"
        >
          The Brand New Album<br />Out Now
        </h2>
        <div class="justify-start items-start gap-6 inline-flex">
          <Buttons text="pre-oder" :class="['btn-primary-outline']" :href="['/release/music']"/>
          <Buttons text="pre-save" :class="['btn-primary-outline']"/>
          <Buttons text="other retailers" :class="['btn-primary-outline']"/>
        </div>
      </div>
    </div>
    <div
      class="flex-col justify-start items-start gap-2 md:flex hidden container"
    >
      <img src="../assets/images/landing/Days of our lives.png" alt="" />
    </div>
  </section>
</template>
