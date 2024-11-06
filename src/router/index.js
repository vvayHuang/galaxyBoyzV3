import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/pages/Landing.vue"),
    },
    {
      path: "/news",
      name: "news",
      component: () => import("../views/pages/News.vue"),
      meta: { title: "News" },
      children: [
        {
          path: "post",
          name: "post",
          component: () => import("../views/pages/Post.vue"),
          meta: { title: "Post" },
        },
      ],
    },
    {
      path: "/shows",
      name: "shows",
      component: () => import("../views/pages/Shows.vue"),
      meta: { title: "Shows" },
    },
    {
      path: "/release",
      name: "release",
      component: () => import("../views/pages/Release.vue"),
      meta: { title: "Release" },
      children: [
        {
          path: "music",
          name: "music",
          component: () => import("../views/pages/Music.vue"),
          meta: { title: "Music" },
        },
      ],
    },
    {
      path: "/shop",
      name: "shop",
      component: () => import("../views/pages/Shop.vue"),
      meta: { title: "Shop" },
      children: [
        {
          path: "product",
          name: "product",
          component: () => import("../views/pages/Product.vue"),
          meta: { title: "Product" },
        },
      ],
    },
    {
      path: "/info",
      name: "info",
      component: () => import("../views/pages/Info.vue"),
      meta: { title: "Info" },
    },
  ],
  history: createWebHistory(import.meta.env.BASE_URL),
  //點擊連結後，頁面會從上面開始
  scrollBehavior() {
    return {
      top: 0,
    };
  },
});
router.beforeEach((to) => {
  document.title = to.meta.title !== undefined ? `${to.meta.title} - GalaxyBoyz` : `GalaxyBoyz official`;
});

export default router;
