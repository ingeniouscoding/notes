import { createReducer, on } from "@ngrx/store";
import { NotesApiActions } from "../actions";

import { Note } from "../models/note.model";

export const notesListFeatureKey = 'notesList';

export interface State {
  notes: Note[] | null;
}

const initialState: State = {
  notes: null,
};

export const reducer = createReducer(
  initialState,
  on(NotesApiActions.getAllSuccess, (state, { notes }) => ({
    ...state,
    notes,
  }))
);