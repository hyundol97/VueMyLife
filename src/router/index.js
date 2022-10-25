import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home";
import configRoutes from "./modules/config/index";
import introduceRoutes from "./modules/introduce/index";
import diaryRoutes from "./modules/diary/index";
import manageRoutes from "./modules/manage/index";

Vue.use(VueRouter);

export const constantRoutes = [
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    meta: { title: "Login" },
    hidden: true,
  },
  // {
  //   path: '/auth-redirect',
  //   component: () => import('@/views/login/AuthRedirect'),
  //   hidden: true,
  // },
  // {
  //   path: '/404',
  //   component: () => import('@/views/error-page/404'),
  //   hidden: true,
  // },
  // {
  //   path: '/401',
  //   component: () => import('@/views/error-page/401'),
  //   hidden: true,
  // },
];

export const asyncRoutes = [
  {
    path: "/",
    redirect: { name: "welcome" },
    hidden: true,
  },
  // 설정
  configRoutes,
  // 자기소개
  introduceRoutes,
  // 다이어리
  diaryRoutes,
  // 지출내역
  manageRoutes,
];

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
