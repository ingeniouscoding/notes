import { createAction, props } from '@ngrx/store';

export const logout = createAction('[Auth] Logout');
export const logoutConfirmation = createAction('[Auth] Logout Confirmation');
export const logoutConfirmationDismiss = createAction(
  '[Auth] Logout Confirmation Dismiss'
);
export const getUser = createAction('[Auth] Get User');
export const getIsAuth = createAction('[Auth] Get IsAuthenticated');
export const setIsAuth = createAction('[Auth] Set User Is Authenticated');

