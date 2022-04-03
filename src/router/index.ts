import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Charts from "../views/Charts.vue";
import Apps from "../views/Apps.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/charts",
    name: "Charts",
    component: Charts,
  },

  {
    path: "/apps",
    name: "Apps",
    component: Apps,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
