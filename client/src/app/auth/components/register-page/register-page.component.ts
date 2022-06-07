import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { RegisterPageActions } from '@notes/auth/actions';
import { AuthService, RegisterCredentials } from '@notes/auth/services/auth.service';
import { UserFormService } from '@notes/auth/services/user-form.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent implements OnInit {
  public registerForm = this.formFactory.getRegisterForm();

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
      name: this.registerForm.getRawValue().name ?? '',
      email: this.registerForm.getRawValue().email ?? '',
      password: this.registerForm.getRawValue().password ?? '',
      password_confirmation:
        this.registerForm.getRawValue().passwordConfirm ?? '',
    };
    this.store.dispatch(RegisterPageActions.register({ credentials }));
  }
}
