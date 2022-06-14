import { createAction, props } from "@ngrx/store";

import { Note } from "../models/note.model";

export const getAllSuccess = createAction(
  '[Notes/API] Get All Notes Success',
  props<{ notes: Note[]; }>()
);

export const getAllFailure = createAction(
  '[Notes/API] Get All Notes Failure',
  props<{ error: { status: number, message: string; }; }>()
);

export const getByIdSuccess = createAction(
  '[Notes/API] Get By ID Success',
  props<{ note: Note; }>()
);

export const getByIdFailure = createAction(
  '[Notes/API] Get By ID Failure',
  props<{ error: { status: number, message: string; }; }>()
);

export const createSuccess = createAction(
  '[Notes/API] Create Success',
  props<{ note: Note; }>()
);

export const createFailure = createAction(
  '[Notes/API] Create Failure',
  props<{ error: string; }>()
);

export const updateSuccess = createAction(
  '[Notes/API] Update Success',
  props<{ note: Note; }>()
);

export const updateFailure = createAction(
  '[Notes/API] Update Failure',
  props<{ error: string; }>()
);

export const destroySuccess = createAction(
  '[Notes/API] Destroy Success'
);

export const destroyFailure = createAction(
  '[Notes/API] Destroy Failure',
  props<{ error: string; }>()
);
