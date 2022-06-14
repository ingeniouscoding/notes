import { props, createAction } from '@ngrx/store';
import { AuthError } from '../models/auth-error.interface';

import { User } from '../models/user.model';

export const loginSuccess = createAction(
  '[Auth/API] Login Success',
  props<{ user: User; }>()
);

export const loginFailure = createAction(
  '[Auth/API] Login Failure',
  props<{ error: AuthError; }>()
);

export const registerSuccess = createAction(
  '[Auth/API] Register Success',
  props<{ user: User; }>()
);

export const registerFailure = createAction(
  '[Auth/API] Register Failure',
  props<{ error: AuthError; }>()
);

export const logoutSuccess = createAction(
  '[Auth/API] Logout Success'
);

export const logoutFailure = createAction(
  '[Auth/API] Logout Failure',
  props<{ error: any; }>()
);
