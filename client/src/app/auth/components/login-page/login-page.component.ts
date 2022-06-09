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

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

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
      email: this.email?.value ?? '',
      password: this.password?.value ?? '',
    };

    this.store.dispatch(LoginPageActions.login({ credentials }));
  }
}
