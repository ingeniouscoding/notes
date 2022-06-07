import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';

import * as fromAuth from '@notes/auth/reducers';

@Injectable({
  providedIn: 'root'
})
export class GuestOnlyGuard implements CanActivate {
  constructor(
    private store: Store,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.store.select(fromAuth.selectIsAuthenticated)
      .pipe(
        map((isAuthenticated) => {
          if (isAuthenticated) {
            return this.router.createUrlTree(['/']);
          }
          return true;
        })
      );
  }
}
