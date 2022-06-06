import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of, switchMap } from "rxjs";

import { LocalStorageService } from "@notes/core/services/local-storage.service";
import { AuthActions, AuthApiActions } from "../actions";
import { AuthService } from "../services/auth.service";
import { isAuthenticatedKey } from "./auth.effects";

@Injectable()
export class UserEffects {
  getUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.getUser),
      exhaustMap(() =>
        this.authService.getUser()
          .pipe(
            map((user) => AuthApiActions.getUserSuccess({ user })),
            catchError(() => of(AuthApiActions.getUserFailure()))
          )
      )
    )
  );

  getUserFailure$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthApiActions.getUserFailure),
      switchMap(() => {
        this.storage.removeItem(isAuthenticatedKey);
        return of(AuthActions.logout());
      })
    ),
  );

  getIsAuthenticated$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.getIsAuth),
      switchMap(() => {
        const item = this.storage.getItem(isAuthenticatedKey);
        if (item !== 'true') {
          return of(AuthActions.logout());
        }
        return of(AuthActions.setIsAuth());
      })
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private storage: LocalStorageService
  ) { }
}
