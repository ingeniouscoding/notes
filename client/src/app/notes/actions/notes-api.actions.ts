import { createAction, props } from "@ngrx/store";

import { Note } from "../models/note.model";

export const getAllSuccess = createAction(
  '[Notes/API] Get All Notes Success',
  props<{ notes: Note[]; }>()
);

export const getAllFailure = createAction(
  '[Notes/API] Get All Notes Failure',
  props<{ error: string; }>()
);
