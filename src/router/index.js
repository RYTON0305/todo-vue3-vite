// src/router/index.js
import { createRouter, createWebHashHistory } from "vue-router";

// createRouter 创建路由实例
const router = createRouter({
  history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
  routes: [
    {
      path: "/",
      component: () => import("@/views/Home.vue"),
    },
  ],
});

// 抛出路由实例, 在 main.js 中引用
export default router;
