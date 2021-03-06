import { createReducer, on } from "@ngrx/store";

import { AuthActions, AuthApiActions, UserApiActions } from "../actions";
import { User } from "../models/user.model";

export const statusFeatureKey = 'status';

export interface State {
  isAuthenticated: boolean;
  user: User | null;
}

const initialState: State = {
  isAuthenticated: false,
  user: null,
};

export const reducer = createReducer(
  initialState,
  on(AuthApiActions.loginSuccess, (state, { user }) => ({
    ...state,
    isAuthenticated: true,
    user,
  })),
  on(AuthApiActions.registerSuccess, (state, { user }) => ({
    ...state,
    isAuthenticated: true,
    user,
  })),
  on(AuthApiActions.logoutSuccess, () => initialState),
  on(UserApiActions.getUserSuccess, (state, { user }) => ({
    ...state,
    user
  })),
  on(AuthActions.setIsAuth, (state, { isAuthenticated }) => ({
    ...state,
    isAuthenticated,
  }))
);
