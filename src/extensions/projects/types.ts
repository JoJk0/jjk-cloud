import {
  ActionContext,
  CommitOptions,
  DispatchOptions,
  Store as VuexStore
} from "vuex";
import { State as RootState } from "@/types/store";

export enum MutationTypes {
  SET_DATE = "SET_DATE"
}

export enum ActionTypes {
  CHANGE_DATE = "CHANGE_DATE",
  FETCH = "FETCH"
}

export type State = Array<Project>;

export interface Project {
  coAuthors: Array<CoAuthor>;
  colourPalette: Array<Colour>;
  colours: ProjectColourSettings;
  copyURL: string;
  date: Date;
  description: string;
  dribbbleURL: string;
  githubURL: string;
  id: number;
  keywords: Array<string>;
  liveURL: string;
  reportURL: string;
  showcasePos: number;
  title: string;
  typography: Array<Font>;
}

interface Colour {
  code: string;
  name: string;
}

interface Font {
  displayName: string;
  name: string;
}

interface ProjectColourSettings {
  background: string;
  panelBg: string;
  text: string;
  topTitleLeft: string;
  topTitleRight: string;
  buttons: string;
}

interface CoAuthor {
  firstName: string;
  lastName: string;
  url: string;
  nickname?: string;
}

export type Getters = {
  date(state: State, id: number): Date;
};

export interface Mutations<S = State> {
  [MutationTypes.SET_DATE](state: S, payload: Date): void;
}

type AugumentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]> & Omit<ActionContext<State, RootState>, "commit">;
};

export interface Actions {
  [ActionTypes.CHANGE_DATE](
    { commit }: AugumentedActionContext,
    payload: Date
  ): void;
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
