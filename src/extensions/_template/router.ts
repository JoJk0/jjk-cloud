import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "counter",
    component: () => import("./body.vue")
  }
];

export default routes;
