import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AuthService, LoginCredentials } from '@notes/auth/services/auth.service';
import { UserFormService } from '@notes/auth/services/user-form.service';
import { LoginPageActions } from '@notes/auth/actions';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  public loginForm = this.formFactory.getLoginForm();

  constructor(
    private auth: AuthService,
    private formFactory: UserFormService,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.auth.getCsrfCookie();
  }

  onLogin() {
    const credentials: LoginCredentials = {
      email: this.loginForm.getRawValue().email ?? '',
      password: this.loginForm.getRawValue().password ?? '',
    };
    this.auth.login(credentials);
    this.store.dispatch(LoginPageActions.login({ credentials }));
  }

  onGetUser() {
    this.auth.getUser();
  }
}
