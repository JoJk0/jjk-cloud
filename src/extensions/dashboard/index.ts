import { JJKExtension } from "@/types";

const extensionConfig: JJKExtension = {
  name: "Dashboard",
  description: "Start page of the app",
  version: "0.0.1",
  author: "Jacob Janisz",
  authorEmail: "jacob@jojko.tech",
  enabled: true,
  body: () => import("./body.vue"),
  actions: () => import("./actions.vue"),
  menu: () => import("./menu.vue"),

  settings: {
    a: "s"
  }
};

export default extensionConfig;
