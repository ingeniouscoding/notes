import { createAction, props } from "@ngrx/store";

import { Note } from "../models/note.model";

export const getAll = createAction('[Notes] Get All Notes');

export const getById = createAction(
  '[Notes] Get By ID',
  props<{ id: string; }>()
);

export const create = createAction(
  '[Notes] Create Note',
  props<{ note: Note; }>()
);

export const update = createAction(
  '[Notes] Update Note',
  props<{ note: Note; }>()
);

export const destroy = createAction(
  '[Notes] Delete Note',
  props<{ id: string; }>()
);
