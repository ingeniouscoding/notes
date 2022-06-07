import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of } from "rxjs";

import { LocalStorageService } from "@notes/core/services/local-storage.service";
import { AuthActions, AuthApiActions, UserApiActions } from "../actions";
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
            map((user) => UserApiActions.getUserSuccess({ user })),
            catchError((error) => {
              if (error.status === 401) {
                return of(AuthApiActions.logoutSuccess());
              }
              return of(UserApiActions.getUserFailure({ error }));
            })
          )
      )
    )
  );

  getIsAuthenticated$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.getIsAuth),
      map(() => {
        const isAuthenticated = !!this.storage.getItem(isAuthenticatedKey);
        return AuthActions.setIsAuth({ isAuthenticated });
      })
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private storage: LocalStorageService
  ) { }
}
