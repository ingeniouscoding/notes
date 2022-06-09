import { createReducer, on } from "@ngrx/store";
import { AuthApiActions, RegisterPageActions } from "../actions";


export const registerPageFeatureKey = 'registerPage';

export interface State {
  error: any;
  pending: boolean;
}

const initialState: State = {
  error: null,
  pending: false,
};

export const reducer = createReducer(
  initialState,
  on(RegisterPageActions.register, (state) => ({
    ...state,
    error: null,
    pending: true,
  })),
  on(AuthApiActions.registerSuccess, (state) => ({
    ...state,
    error: null,
    pending: false,
  })),
  on(AuthApiActions.registerFailure, (state, { error }) => ({
    ...state,
    error: error,
    pending: false,
  }))
);
