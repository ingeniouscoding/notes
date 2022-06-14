import { createReducer, on } from "@ngrx/store";

import { AuthApiActions, RegisterPageActions } from "../actions";
import { AuthError } from "../models/auth-error.interface";

export const registerPageFeatureKey = 'registerPage';

export interface State {
  pending: boolean;
  error: AuthError | null;
}

const initialState: State = {
  pending: false,
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(RegisterPageActions.register, (state) => ({
    ...state,
    pending: true,
    error: null,
  })),
  on(AuthApiActions.registerSuccess, (state) => ({
    ...state,
    pending: false,
    error: null,
  })),
  on(AuthApiActions.registerFailure, (state, { error }) => ({
    ...state,
    pending: false,
    error: error,
  }))
);
