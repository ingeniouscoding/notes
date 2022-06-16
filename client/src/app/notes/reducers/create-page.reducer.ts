import { createReducer, on } from "@ngrx/store";

import { NotesActions, NotesApiActions } from "../actions";
import { NotesError } from "../models/notes-error.interface";

export const createPageFeatureKey = 'createPage';

export interface State {
  pending: boolean;
  error: NotesError | null;
}

const initialState: State = {
  pending: false,
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(NotesActions.create, (state) => ({
    ...state,
    pending: true,
    error: null,
  })),
  on(NotesApiActions.createSuccess, () => initialState),
  on(NotesApiActions.createFailure, (state, { error }) => ({
    ...state,
    pending: false,
    error,
  }))
);
