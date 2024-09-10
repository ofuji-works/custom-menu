import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router";
import jsonData from "./assets/routes.json";

const routes: RouteRecordRaw[] = jsonData;

routes.push({
  path: "/",
  component: {
    template: "<h1>Hello World</h1>",
  },
});

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
