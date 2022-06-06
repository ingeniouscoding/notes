import { createReducer, on } from "@ngrx/store";

import { AuthActions, AuthApiActions } from "../actions";
import { User } from "../models/user";

export const statusFeatureKey = 'status';

export interface State {
  user: User | null;
}

const initialState: State = {
  user: null,
};

export const reducer = createReducer(
  initialState,
  on(AuthApiActions.loginSuccess, (state, { user }) => ({ ...state, user })),
  on(AuthActions.logout, () => initialState)
);
