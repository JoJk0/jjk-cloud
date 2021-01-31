import { JJKExtension } from "@/types";
import { projectsModule } from "./store";
import routes from "./router";
import { constructOutline } from 'ionicons/icons';

const extensionConfig: JJKExtension = {
  name: "Projects",
  description: "Manage your projects in jjk-portfolio",
  version: "0.0.1",
  author: "Jacob Janisz",
  authorEmail: "jacob@jojko.tech",
  enabled: true,

  body: () => import("./body.vue"),
  actions: () => import("./actions.vue"),
  menu: () => import("./menu.vue"),
  menuEntry: {
    name: "Projects",
    path: "/projects",
    icon: constructOutline
  },
  store: projectsModule,
  router: routes,

  settings: {
    key: "value"
  }
};

export default extensionConfig;
