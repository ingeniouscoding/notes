import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of } from "rxjs";

import { AuthApiActions, LoginPageActions } from "../actions";
import { AuthService, LoginCredentials } from "../services/auth.service";

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginPageActions.login),
      map((action) => action.credentials),
      exhaustMap((credentials) =>
        this.authService.login(credentials)
          .pipe(
            map((user) => AuthApiActions.loginSuccess({ user })),
            catchError((error) => of(AuthApiActions.loginFailure({ error })))
          )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) { }
}