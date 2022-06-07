import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, map } from 'rxjs';

import { AuthActions } from '@notes/auth/actions';
import * as fromAuth from '@notes/auth/reducers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  private user$ = this.store.select(fromAuth.selectUser);
  private isAuth$ = this.store.select(fromAuth.selectIsAuthenticated);

  public vm$ = combineLatest([this.isAuth$, this.user$])
    .pipe(
      map(([isAuth, user]) => {
        if (isAuth && !user) {
          this.store.dispatch(AuthActions.getUser());
        }
        return { isAuth, user };
      }),
    );

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(AuthActions.getIsAuth());
  }

  onLogout() {
    this.store.dispatch(AuthActions.logout());
  }
}
