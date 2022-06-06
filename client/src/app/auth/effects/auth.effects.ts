import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { LocalStorageService } from "@notes/core/services/local-storage.service";
import { catchError, exhaustMap, map, of, tap } from "rxjs";

import { AuthApiActions, LoginPageActions } from "../actions";
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
            catchError((error) => of(AuthApiActions.loginFailure({ error })))
          )
      )
    )
  );

  loginSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthApiActions.loginSuccess),
      tap(() => {
        this.storage.setItem(isAuthenticatedKey, 'true');
        this.router.navigate(['/']);
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
