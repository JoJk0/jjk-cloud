import { createApp } from "vue";
import App from "./App.vue";

import { IonicVue } from "@ionic/vue";

import { useExtensions } from "@/services/utils";

/* Global components */

/* JJK Extensions */
import dashboardExtension from "@/extensions/dashboard";
import budgetExtension from "@/extensions/budget";
import projectsExtension from "@/extensions/projects";

/* Core CSS required for Ionic components to work properly */
import "@ionic/vue/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/vue/css/normalize.css";
import "@ionic/vue/css/structure.css";
import "@ionic/vue/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/vue/css/padding.css";
import "@ionic/vue/css/float-elements.css";
import "@ionic/vue/css/text-alignment.css";
import "@ionic/vue/css/text-transformation.css";
import "@ionic/vue/css/flex-utils.css";
import "@ionic/vue/css/display.css";

/* Theme variables */

import "./theme/variables.css";
import { JJKExtensionList } from "./types";

export const jjkExtensions: JJKExtensionList = {
  dashboardExtension,
  budgetExtension,
  projectsExtension
};

const { router, store, RouterSymbol, StoreSymbol } = useExtensions(
  jjkExtensions
);

const app = createApp(App)
  .provide(RouterSymbol, router)
  .provide(StoreSymbol, store)
  .use(IonicVue)
  .use(router)
  .use(store);

//store.commit('increment');

router.isReady().then(() => {
  app.mount("#app");
});
