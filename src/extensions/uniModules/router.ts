import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "uni-modules",
    component: () => import("./body.vue")
  }
];

export default routes;
