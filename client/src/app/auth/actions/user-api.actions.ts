import { createAction, props } from "@ngrx/store";

import { User } from "../models/user.model";

export const getUserSuccess = createAction(
  '[Auth/API] Get User Success',
  props<{ user: User; }>()
);

export const getUserFailure = createAction(
  '[Auth/API] Get User Failure',
  props<{ error: any; }>()
);

export const loginRedirect = createAction('[Auth/API] Login Redirect');
