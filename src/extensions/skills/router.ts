import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "skills",
    component: () => import("./body.vue")
  }
];

export default routes;
