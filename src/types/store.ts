import {
  State as ProjectsState,
  Store as ProjectsStore
} from "../extensions/projects/types";

// State type
export type State = {
  projects: ProjectsState;
};

// Store types
export type Store = ProjectsStore<Pick<State, "projects">>;
