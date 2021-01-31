import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "dashboard",
    component: () => import("./body.vue")
  }
];

export default routes;
