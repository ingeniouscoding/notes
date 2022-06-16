import { createReducer, on } from "@ngrx/store";

import { NotesActions, NotesApiActions } from "../actions";
import { NotesError } from "../models/notes-error.interface";

export const getByIdPageFeatureKey = 'getByIdPage';

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
