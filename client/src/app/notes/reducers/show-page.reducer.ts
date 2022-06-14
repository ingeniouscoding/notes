import { createReducer, on } from "@ngrx/store";

import { NotesActions, NotesApiActions } from "../actions";

export const showPageFeatureKey = 'showPage';

export interface State {
  pending: boolean;
  error: {
    status: number;
    message: string;
  } | null;
}

const initialState: State = {
  pending: false,
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(NotesActions.getById, (state) => ({
    ...state,
    pending: true,
    error: null,
  })),
  on(NotesApiActions.getByIdSuccess, () => initialState),
  on(NotesApiActions.getByIdFailure, (state, { error }) => ({
    ...state,
    pending: false,
    error,
  }))
);
