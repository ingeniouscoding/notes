import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, EMPTY, exhaustMap, map, of, switchMap } from "rxjs";

import { LocalStorageService } from "@notes/core/services/local-storage.service";
import { AuthActions, UserApiActions } from "../actions";
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
            catchError(() => EMPTY)
          )
      )
    )
  );

  getIsAuthenticated$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.getIsAuth),
      switchMap(() => {
        const isAuthenticated = !!this.storage.getItem(isAuthenticatedKey);
        return of(AuthActions.setIsAuth({ isAuthenticated }));
      })
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private storage: LocalStorageService
  ) { }
}
