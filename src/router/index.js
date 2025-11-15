import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { title: "首页" },
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
    meta: { title: "关于" },
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: () => import("../views/PortfolioView.vue"),
    meta: { title: "作品集" },
  },
  {
    path: "/blog",
    name: "blog",
    component: () => import("../views/BlogView.vue"),
    meta: { title: "个人经历" },
  },
  {
    path: "/read/:slug/:id",
    name: "articleDetail",
    component: () => import("../views/ArticleView.vue"),
    meta: { title: "个人经历" },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
