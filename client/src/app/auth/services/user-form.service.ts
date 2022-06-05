import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface LoginFormControls {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}

export interface RegisterFormControls extends LoginFormControls {
  name: FormControl<string | null>;
  passwordConfirm: FormControl<string | null>;
}

@Injectable({
  providedIn: 'root',
})
export class UserFormService {
  getLoginForm(): FormGroup<LoginFormControls> {
    return new FormGroup({
      email: this.getEmailControl(),
      password: this.getPasswordControl(),
    });
  }

  getRegisterForm(): FormGroup<RegisterFormControls> {
    return new FormGroup({
      name: this.getEmailControl(),
      email: this.getEmailControl(),
      password: this.getPasswordControl(),
      passwordConfirm: this.getPasswordConfirmControl(),
    });
  }

  private getNameControl(): FormControl<string | null> {
    return new FormControl('', [
      Validators.required,
    ]);
  }

  private getEmailControl(): FormControl<string | null> {
    return new FormControl('', [
      Validators.required,
    ]);
  }

  private getPasswordControl() {
    return new FormControl('', [
      Validators.required,
    ]);
  }

  private getPasswordConfirmControl() {
    return new FormControl('', [
      Validators.required,
    ]);
  }
}
