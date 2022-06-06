import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';

import { AuthActions } from '@notes/auth/actions';
import * as fromAuth from '@notes/auth/reducers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user$ = this.store.select(fromAuth.selectUser);

  isAuth$ = this.store.select(fromAuth.selectIsAuthenticated)
    .pipe(
      tap((isAuth) => {
        if (isAuth) {
          this.store.dispatch(AuthActions.getUser());
        }
      })
    );

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(AuthActions.getIsAuth());
  }

  onLogout() {
    this.store.dispatch(AuthActions.logout());
  }
}
