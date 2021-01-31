import { JJKExtension } from "@/types";
import { counterModule } from "./store";
import routes from "./router";
import { extensionPuzzleOutline } from "ionicons/icons";

const extensionConfig: JJKExtension = {
  name: "",
  description: "",
  version: "0.0.1",
  author: "Jacob Janisz",
  authorEmail: "jacob@jojko.tech",
  enabled: true,

  body: () => import("./body.vue"),
  actions: () => import("./actions.vue"),
  menu: () => import("./menu.vue"),
  menuEntry: {
    name: "",
    path: "/counter",
    icon: extensionPuzzleOutline
  },
  store: counterModule,
  router: routes,

  settings: {
    key: "value"
  }
};

export default extensionConfig;
