import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "budget",
    component: () => import("./body.vue")
  }
];

export default routes;
