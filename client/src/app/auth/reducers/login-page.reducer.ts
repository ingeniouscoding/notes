import { createReducer, on } from "@ngrx/store";

import { AuthApiActions, LoginPageActions } from "../actions";
import { AuthError } from "../models/auth-error.interface";

export const loginPageFeatureKey = 'loginPage';

export interface State {
  pending: boolean;
  error: AuthError| null;
}

const initialState: State = {
  pending: false,
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(LoginPageActions.login, (state) => ({
    ...state,
    pending: true,
    error: null,
  })),
  on(AuthApiActions.loginSuccess, (state) => ({
    ...state,
    pending: false,
    error: null,
  })),
  on(AuthApiActions.loginFailure, (state, { error }) => ({
    ...state,
    pending: false,
    error,
  }))
);
