import { createAction, props } from "@ngrx/store";

import { LoginCredentials } from "../services/auth.service";

export const login = createAction(
  '[Login Page] Login',
  props<LoginCredentials>()
);
