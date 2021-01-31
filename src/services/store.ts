import { createLogger, createStore, Module, ModuleTree } from "vuex";

import { State as RootState } from "@/types/store";
import { inject } from "vue";

const StoreSymbol = Symbol();

export const store = (storeModules: ModuleTree<Module<any, RootState>>) => {
  const store = createStore({
    plugins: process.env.NODE_ENV === "production" ? [] : [createLogger()],
    modules: storeModules
  });

  return { store, StoreSymbol };
};

export function useStore() {
  const store = inject(StoreSymbol);
  if (!store) {
    throw new Error("App error: No store provided!");
  }
  return store;
}
