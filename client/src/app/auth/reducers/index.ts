import { Action, combineReducers } from '@ngrx/store';

import * as fromRoot from '@notes/app.state';
import * as fromLoginPage from './login-page.reducer';

export const authFeatureKey = 'auth';

export interface AuthState {
  [fromLoginPage.loginPageFeatureKey]: fromLoginPage.State;
}

export interface State extends fromRoot.State {
  [authFeatureKey]: AuthState;
}

export function reducers(state: AuthState | undefined, action: Action) {
  return combineReducers({
    [fromLoginPage.loginPageFeatureKey]: fromLoginPage.reducer,
  })(state, action);
}
