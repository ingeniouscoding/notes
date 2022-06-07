import { Action, combineReducers, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromRoot from '@notes/app.state';
import * as fromLoginPage from './login-page.reducer';
import * as fromRegisterPage from './register-page.reducer';
import * as fromAuth from './auth.reducer';

export const authFeatureKey = 'auth';

export interface AuthState {
  [fromLoginPage.loginPageFeatureKey]: fromLoginPage.State;
  [fromRegisterPage.registerPageFeatureKey]: fromRegisterPage.State;
  [fromAuth.statusFeatureKey]: fromAuth.State;
}

export interface State extends fromRoot.State {
  [authFeatureKey]: AuthState;
}

export function reducers(state: AuthState | undefined, action: Action) {
  return combineReducers({
    [fromLoginPage.loginPageFeatureKey]: fromLoginPage.reducer,
    [fromRegisterPage.registerPageFeatureKey]: fromRegisterPage.reducer,
    [fromAuth.statusFeatureKey]: fromAuth.reducer,
  })(state, action);
}

const selectAuthStateFeature =
  createFeatureSelector<AuthState>(authFeatureKey);

const selectAuthStatusState = createSelector(
  selectAuthStateFeature,
  (state) => state.status
);

export const selectUser = createSelector(
  selectAuthStatusState,
  (state) => state.user
);

export const selectIsAuthenticated = createSelector(
  selectAuthStatusState,
  (state) => state.isAuthenticated
);

const selectLoginPageState = createSelector(
  selectAuthStateFeature,
  (state) => state.loginPage
);

export const selectLoginPageError = createSelector(
  selectLoginPageState,
  (state) => state.error
);
export const selectLoginPagePending = createSelector(
  selectLoginPageState,
  (state) => state.pending
);

const selectRegisterPageState = createSelector(
  selectAuthStateFeature,
  (state) => state.registerPage
);
