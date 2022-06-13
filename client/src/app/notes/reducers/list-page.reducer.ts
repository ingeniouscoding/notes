import { createReducer, on } from "@ngrx/store";
import { NotesActions, NotesApiActions } from "../actions";

export const listPageFeatureKey = 'listPage';

export interface State {
  pending: boolean;
  error: string | null;
}

const initialState: State = {
  pending: false,
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(NotesActions.getAll, (state) => ({
    ...state,
    pending: true,
    error: null,
  })),
  on(NotesApiActions.getAllSuccess, () => initialState),
  on(NotesApiActions.getAllFailure, (state, { error }) => ({
    ...state,
    pending: false,
    error,
  }))
);