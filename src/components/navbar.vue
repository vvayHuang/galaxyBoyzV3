<script setup>
import LogoHorizontal from "./logoHorizontal.vue";
import iconList from "./icons/list.vue";
import CloseComponents from "./icons/xClose.vue";
import Menu from "./menu.vue";

import { ref, watch, onMounted, onBeforeUnmount } from "vue";

const menuOpen = ref(false);
let scrollPosition = 0;

// 切換選單開關狀態
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

// 點擊選單外部關閉選單
const closeMenu = () => {
  menuOpen.value = false;
};

// 當視窗寬度變更時，自動關閉漢堡選單
const handleResize = () => {
  if (window.innerWidth >= 768) {
    closeMenu();
  }
};

// 監聽 menuOpen 狀態變化
watch(menuOpen, (newVal) => {
  if (newVal) {
    // 保存當前滾動位置，並將 body 設置為 fixed
    scrollPosition = window.pageYOffset;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = "100%";
  } else {
    // 恢復滾動位置，取消 fixed
    document.body.style.position = "";
    document.body.style.top = "";
    window.scrollTo(0, scrollPosition);
  }
});

// 組件掛載時，監聽視窗大小變化事件
onMounted(() => {
  window.addEventListener("resize", handleResize);
});

// 組件銷毀時，移除監聽
onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
  document.body.style.position = "";
  document.body.style.top = "";
});
</script>

<template>
  <header class="bg-surface">
    <nav
      class="lg:px-[52px] px-4 mx-auto py-4 justify-between items-center flex"
    >
      <RouterLink to="/">
        <LogoHorizontal />
      </RouterLink>
      <button
        class="btn-outline-primary md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 z-10"
        @click="toggleMenu"
      >
        <iconList class="burgerMenu text-background-on"></iconList>
      </button>
      <!-- 背景遮罩，用於模糊效果和監聽點擊事件 -->
      <div
        v-if="menuOpen"
        class="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm"
        @click="closeMenu"
      ></div>
      <div
        :class="{ 'translate-y-0': menuOpen, '-translate-y-full': !menuOpen }"
        class="fixed md:static inset-x-0 top-0 bg-background md:bg-[transparent] transition-transform duration-300 md:translate-y-0 z-20 py-20 md:py-0"
      >
        <CloseComponents
          class="navLink p-2 w-12 h-12 mb-12 block md:hidden"
          @click="closeMenu"
        />
        <Menu />
      </div>
    </nav>
  </header>
</template>
