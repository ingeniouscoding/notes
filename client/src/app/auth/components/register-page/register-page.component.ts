import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromAuth from '@notes/auth/reducers';
import { RegisterPageActions } from '@notes/auth/actions';
import { AuthService, RegisterCredentials } from '@notes/auth/services/auth.service';
import { UserFormService } from '@notes/auth/services/user-form.service';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent implements OnInit {
  public isVisible = false;
  public registerForm = this.formFactory.getRegisterForm();
  public isPending$ = this.store.select(fromAuth.selectRegisterPageIsPending);
  public errors$ = this.store.select(fromAuth.selectRegisterPageError)
    .pipe(
      map((err) => {
        if (err === null) {
          return null;
        }
        if (err.status === 422) {
          const nameErrors = err.errors.name ?? [];
          const emailErrors = err.errors.email ?? [];
          const passwordErrors = err.errors.password ?? [];
          return [].concat(nameErrors, emailErrors, passwordErrors);
        }
        return ['Server error'];
      })
    );

  get name() {
    return this.registerForm.get('name');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }

  constructor(
    private store: Store,
    private auth: AuthService,
    private formFactory: UserFormService,
  ) { }

  ngOnInit(): void {
    this.auth.getCsrfCookie();
  }

  onRegister() {
    const credentials: RegisterCredentials = {
      name: this.name?.value ?? '',
      email: this.email?.value ?? '',
      password: this.password?.value ?? '',
      password_confirmation: this.confirmPassword?.value ?? '',
    };

    this.store.dispatch(RegisterPageActions.register({ credentials }));
  }

  togglePasswordVisibility() {
    this.isVisible = !this.isVisible;
  }
}
