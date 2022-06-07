import { createAction, props } from "@ngrx/store";

import { RegisterCredentials } from "../services/auth.service";

export const register = createAction(
  '[Register Page] Register New User',
  props<{ credentials: RegisterCredentials; }>()
);
