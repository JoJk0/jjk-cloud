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

const state: State = [];

const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_DATE](state: State, payload: Date) {
    // logic
  }
};

const actions: ActionTree<State, RootState> & Actions = {
  async [ActionTypes.CHANGE_DATE]({ commit }, payload: Date) {
    try {
      // some logic that logs a user in
      commit(MutationTypes.SET_DATE, payload);
    } catch (err) {
      // some error handling logic
    }
  },
  async [ActionTypes.FETCH](_: any, _2: any) {
    try {
      const projects = await axios.get(
        "https://jjk-portfolio.firebaseio.com/Projects.json"
      );
      console.log(projects);
    } catch (e) {
      console.log("ERROR");
    }
  }
};

const getters: GetterTree<State, RootState> & Getters = {
  date: (state: State, id: number) => {
    // logic
    return state[id].date;
  }
};

export const projectsModule: Module<State, RootState> = {
  state,
  mutations,
  actions,
  getters
};
