import { createRouter, createWebHistory } from "@ionic/vue-router";
import { inject } from "vue";
import { RouteRecordRaw } from "vue-router";
import Tabs from "@/components/Tabs.vue";

const rootRoutes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/dashboard"
  },
  {
    path: "/",
    component: Tabs,
    children: [
      {
        path: "",
        redirect: "/dashboard"
      }
    ]
  }
];

const RouterSymbol = Symbol();

export const router = (routes: RouteRecordRaw[]) => {
  routes.forEach(route => {
    rootRoutes[1].children?.push(route);
  });

  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: rootRoutes
  });

  return { router, RouterSymbol };
};

export function useRouter() {
  const router = inject(RouterSymbol);
  if (!router) {
    throw new Error("App error: No router provided!");
  }
  return router;
}
