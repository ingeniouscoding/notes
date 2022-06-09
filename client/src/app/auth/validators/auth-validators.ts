import { AbstractControl, ValidationErrors } from "@angular/forms";
import { catchError, EMPTY, first, map, switchMap, timer } from "rxjs";

import { AuthService } from "../services/auth.service";

export function createEmailIsUniqueValidator(authService: AuthService) {
  return (control: AbstractControl) =>
    timer(300).pipe(
      switchMap(() =>
        authService.checkEmailAlreadyExist(control.value)
          .pipe(
            map((res) => {
              if (res.isUnique) {
                return null;
              }
              if (res.error === 'The email has already been taken.') {
                return { emailExists: true };
              }
              return null;
            }),
            catchError(() => EMPTY)
          )
      ),
      first()
    );

}

export function createCompareValidator(
  controlOne: AbstractControl<string | null>,
  controlTwo: AbstractControl<string | null>): () => ValidationErrors | null {
  return (): ValidationErrors | null => {
    if (controlOne.value !== controlTwo.value)
      return { match_values: 'Values does not match' };
    return null;
  };
};
