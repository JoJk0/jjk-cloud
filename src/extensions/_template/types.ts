import {
  ActionContext,
  CommitOptions,
  DispatchOptions,
  Store as VuexStore
} from "vuex";
import { State as RootState } from "@/types/store";

export enum MutationTypes {
  ADD = "ADD"
}

export enum ActionTypes {
  ADD = "ADD"
}

export type State = {
  counter: number;
};

export type Getters = {
  counter(state: State): number;
};

export interface Mutations<S = State> {
  [MutationTypes.ADD](state: S, payload: number): void;
}

type AugumentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]> & Omit<ActionContext<State, RootState>, "commit">;
};

export interface Actions {
  [ActionTypes.ADD]({ commit }: AugumentedActionContext, payload: number): void;
}

export type Store<S = State> = Omit<
  VuexStore<S>,
  "commit" | "getters" | "dispatch"
> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>;
  };
} & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>;
};
