import { createReducer, on } from "@ngrx/store";
import { NotesActions, NotesApiActions } from "../actions";

import { Note } from "../models/note.model";

export const notesListFeatureKey = 'notesList';

export interface State {
  current: Note | null;
  notes: Note[] | null;
}

const initialState: State = {
  current: null,
  notes: null,
};

export const reducer = createReducer(
  initialState,
  on(NotesApiActions.getAllSuccess, (state, { notes }) => ({
    ...state,
    notes,
  })),
  on(NotesApiActions.createSuccess, (state, { note }) => ({
    ...state,
    notes: (state.notes ?? []).concat(note)
  })),
  on(NotesActions.getById, (state, { id }) => ({
    ...state,
    current: state.current?.id === id ? state.current : null,
  })),
  on(NotesApiActions.getByIdSuccess, (state, { note }) => ({
    ...state,
    current: note,
  })),
  on(NotesApiActions.destroySuccess, (state, { id }) => ({
    ...state,
    notes: state.notes?.filter((n) => n.id !== id) ?? null,
  }))
);
