<script setup>
import { onMounted } from "vue";
import { gsap } from "gsap";
import shopData from "@/data/shop";

const { shops } = shopData;

const props = defineProps({
  limit: {
    type: Number,
    default: null, // 預設顯示所有資料
  },
});


onMounted(() => {
  gsap.matchMedia().add("(min-width:1024px)", () => {
    //initially colorize each box and position in a row
    gsap.set(".box", {
      x: (i) => i * 472,
    });
    gsap.to(".box", {
      duration: 80,
      ease: "none",
      x: "+=2832", //move each box 500px to right
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % 2832), //force x value to be between 0 and 500 using modulus
      },
      repeat: -1,
    });
  });
});
</script>
<template>
  <nav class="wrapper">
    <ul class="boxes">
      <li v-for="shop in shops" :key="shops.id">
        <div class="box">
        <router-link :to="shop.href"><img class=" w-full h-full object-cover" :src="shop.imageSrc" :alt="shop.imageAlt"
          /></router-link>
          
        </div>
      </li>
    </ul>
  </nav>
</template>
<style scoped>
.wrapper {
  width: 100%;
  position: relative;
  overflow: hidden;
  @media (min-width: 768px) {
    height: 424px;
  }
}

.box {
  border-radius: 10px;
  overflow: hidden;
  @media (min-width: 768px) {
    width: 424px;
    height: 424px;
    position: absolute;
  }
}

.boxes {
  position: relative;
  @media (min-width: 768px) {
    left: -472px;
  }
}
</style>
