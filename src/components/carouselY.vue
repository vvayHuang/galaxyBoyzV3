<script setup>
import { onMounted } from "vue";
import { gsap } from "gsap";
import releaseData from "@/data/release";

const { releases } = releaseData;

onMounted(() => {
  gsap.matchMedia().add("(min-width:1024px)",()=>{

    //initially colorize each box and position in a row
    gsap.set(".musicBox", {
      y: (i) => i * 472,
    });
  
    gsap.to(".musicBox", {
      duration: 80,
      ease: "none",
      y: "+=2832", //move each box 500px to right
      modifiers: {
        y: gsap.utils.unitize((y) => parseFloat(y) % 2832), //force x value to be between 0 and 500 using modulus
      },
      repeat: -1,
    });
  })
});
</script>
<template>
  <nav class="wrapper mb-6">
    <ul class="boxes">
      <li v-for="release in releases" :key="release.id">
        <div class="musicBox">
          <router-link :to="release.href"><img class=" w-full h-full object-cover" :src="release.imageSrc" :alt="release.imageAlt"
            /></router-link>
        </div>
      </li>
    </ul>
  </nav>
</template>
<style scoped>
.wrapper {
  height: 100%;
  position: relative;
  overflow: hidden;
  @media (min-width:1024px) {
    width: 250px;
  }
  @media (min-width: 1440px) {
    width: 424px;
  }
}

.musicBox {
  border-radius: 10px;
  overflow: hidden;
  @media (min-width: 1024px) {
    width: 250px;
    height: 250px;
    position: absolute;
  }
  @media (min-width: 1440px) {
    width: 424px;
    height: 424px;
  }
}

.boxes {
  position: relative;
  top: -472px;
}
</style>
