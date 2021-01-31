import { JJKExtensionList } from "@/types";
import { RouteRecordRaw } from "vue-router";
import { State as RootState } from "@/types/store";
import { Module, ModuleTree } from "vuex";

import { store as createStore } from "@/services/store";
import { router as createRouter } from "@/services/router";

export const useExtensions = (extensions: JJKExtensionList) => {
  const storeModules: ModuleTree<Module<any, RootState>> = {};
  const routes: RouteRecordRaw[] = [];

  Object.keys(extensions).forEach(key => {
    const extStore = extensions[key].store;
    const extRouter = extensions[key].router;

    console.log(extRouter);

    if (extRouter) {
      extRouter.forEach(route => {
        routes.push(route);
      });
    }

    if (extStore) {
      Object.assign(storeModules, extStore);
    }
  });

  console.log(routes);

  const { store, StoreSymbol } = createStore(storeModules);

  const { router, RouterSymbol } = createRouter(routes);

  return { router, store, StoreSymbol, RouterSymbol };
};
