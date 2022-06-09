import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { createCompareValidator, createEmailIsUniqueValidator } from '../validators/auth-validators';
import { AuthService } from './auth.service';

export interface LoginFormControls {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}

export interface RegisterFormControls extends LoginFormControls {
  name: FormControl<string | null>;
  confirmPassword: FormControl<string | null>;
}

@Injectable({
  providedIn: 'root',
})
export class UserFormService {
  constructor(private authService: AuthService) { }

  getLoginForm(): FormGroup<LoginFormControls> {
    return new FormGroup({
      email: this.getLoginEmailControl(),
      password: this.getLoginPasswordControl(),
    });
  }

  getRegisterForm(): FormGroup<RegisterFormControls> {
    const fg = new FormGroup({
      name: this.getNameControl(),
      email: this.getRegisterEmailControl(),
      password: this.getRegisterPasswordControl(),
      confirmPassword: this.getConfirmPasswordControl(),
    });

    fg.addValidators(
      createCompareValidator(fg.get('password')!, fg.get('confirmPassword')!)
    );

    return fg;
  }

  private getNameControl(): FormControl<string | null> {
    return new FormControl('', [
      Validators.required,
      Validators.maxLength(255),
    ]);
  }

  private getLoginEmailControl(): FormControl<string | null> {
    return new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.maxLength(255),
    ]);
  }

  private getRegisterEmailControl(): FormControl<string | null> {
    return new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.maxLength(255),
    ], [
      createEmailIsUniqueValidator(this.authService),
    ]);
  }

  private getLoginPasswordControl() {
    return new FormControl('', [
      Validators.required,
    ]);
  }

  private getRegisterPasswordControl() {
    return new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(255),
    ]);
  }

  private getConfirmPasswordControl() {
    return new FormControl('', [
      Validators.required,
    ]);
  }
}
