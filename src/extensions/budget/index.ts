import { JJKExtension } from "@/types";
import routes from "./router";
import { budgetModule } from "./store";
import { calculatorOutline } from "ionicons/icons";

const extensionConfig: JJKExtension = {
  name: "Budget",
  description: "Monthly budget",
  version: "0.0.1",
  author: "Jacob Janisz",
  authorEmail: "jacob@jojko.tech",
  enabled: true,
  body: () => import("./body.vue"),
  actions: () => import("./actions.vue"),
  menu: () => import("./menu.vue"),
  menuEntry: {
    name: "Budget",
    path: "/budget",
    icon: calculatorOutline
  },
  store: budgetModule,
  router: routes,

  settings: {
    a: "s"
  }
};

export default extensionConfig;
