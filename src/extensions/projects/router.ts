import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "projects",
    component: () => import("./body.vue")
  }
];

export default routes;
