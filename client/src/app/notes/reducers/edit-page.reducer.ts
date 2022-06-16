import { createReducer, on } from "@ngrx/store";

import { NotesActions, NotesApiActions } from "../actions";
import { NotesError } from "../models/notes-error.interface";

export const editPageFeatureKey = 'editPage';

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
);
