import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

export interface LoginFormControls {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}

export interface RegisterFormControls extends LoginFormControls {
  name: FormControl<string | null>;
  confirmPassword: FormControl<string | null>;
}

function createCompareValidator(
  controlOne: AbstractControl<string | null>,
  controlTwo: AbstractControl<string | null>): () => ValidationErrors | null {
  return (): ValidationErrors | null => {
    if (controlOne.value !== controlTwo.value)
      return { match_values: 'Values does not match' };
    return null;
  };
};

@Injectable({
  providedIn: 'root',
})
export class UserFormService {
  getLoginForm(): FormGroup<LoginFormControls> {
    return new FormGroup({
      email: this.getEmailControl(),
      password: this.getLoginPasswordControl(),
    });
  }

  getRegisterForm(): FormGroup<RegisterFormControls> {
    const fg = new FormGroup({
      name: this.getNameControl(),
      email: this.getEmailControl(),
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

  private getEmailControl(): FormControl<string | null> {
    return new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.maxLength(255),
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
