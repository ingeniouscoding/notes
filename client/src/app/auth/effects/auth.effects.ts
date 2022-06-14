import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { LocalStorageService } from "@notes/core/services/local-storage.service";
import { catchError, exhaustMap, map, of, tap } from "rxjs";

import {
  AuthActions,
  AuthApiActions,
  LoginPageActions,
  RegisterPageActions
} from "../actions";
import { AuthService } from "../services/auth.service";

export const isAuthenticatedKey = 'is_authenticated';

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
            catchError((err) =>
              of(AuthApiActions.loginFailure({
                error: {
                  status: err.status,
                  message: err.message,
                  errors: err.error.errors,
                }
              }))
            )
          )
      )
    )
  );

  loginSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthApiActions.loginSuccess),
      tap(() => {
        this.router.navigate(['/']);
        this.storage.setItem(isAuthenticatedKey, 'true');
      })
    ),
    { dispatch: false }
  );

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RegisterPageActions.register),
      map((action) => action.credentials),
      exhaustMap((credentials) =>
        this.authService.register(credentials)
          .pipe(
            map((user) => AuthApiActions.registerSuccess({ user })),
            catchError(
              (err) => of(AuthApiActions.registerFailure({
                error: {
                  status: err.status,
                  message: err.message,
                  errors: err.error.errors,
                }
              }))
            )
          )
      )
    )
  );

  registerSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthApiActions.registerSuccess),
      tap(() => {
        this.router.navigate(['/']);
        this.storage.setItem(isAuthenticatedKey, 'true');
      })
    ),
    { dispatch: false }
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.logout),
      exhaustMap(() =>
        this.authService.logout()
          .pipe(
            map(() => AuthApiActions.logoutSuccess()),
            catchError((error) =>
              of(AuthApiActions.logoutFailure({ error }))
            )
          )
      )
    )
  );

  logoutSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthApiActions.logoutSuccess),
      tap(() => {
        this.router.navigate(['/']);
        this.storage.removeItem(isAuthenticatedKey);
      })
    ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private storage: LocalStorageService,
    private router: Router
  ) { }
}
