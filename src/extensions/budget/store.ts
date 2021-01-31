import {
  State,
  Mutations,
  Actions,
  Getters,
  MutationTypes,
  ActionTypes
} from "./types";
import { ActionTree, GetterTree, Module, MutationTree } from "vuex";
import { State as RootState } from "@/types/store";
import axios from "axios";

const state: State = {
  counter: 1
};

const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.ADD](state: State, payload: number) {
    // logic
  }
};

const actions: ActionTree<State, RootState> & Actions = {
  async [ActionTypes.ADD]({ commit }, payload: number) {
    try {
      // some logic that logs a user in
      commit(MutationTypes.ADD, payload);
    } catch (err) {
      // some error handling logic
    }
  }
};

const getters: GetterTree<State, RootState> & Getters = {
  counter: (state: State) => {
    // logic
    return state.counter;
  }
};

export const budgetModule: Module<State, RootState> = {
  state,
  mutations,
  actions,
  getters
};
