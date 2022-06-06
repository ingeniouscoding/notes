import { props, createAction } from '@ngrx/store';

import { User } from '../models/user.model';

export const loginSuccess = createAction(
  '[Auth/API] Login Success',
  props<{ user: User; }>()
);

export const loginFailure = createAction(
  '[Auth/API] Login Failure',
  props<{ error: any; }>()
);

export const getUserSuccess = createAction(
  '[Auth/API] Get User Success',
  props<{ user: User; }>()
);

export const getUserFailure = createAction('[Auth/API] Get User Failure');

export const loginRedirect = createAction('[Auth/API] Login Redirect');
