import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-auth-form-ui',
  templateUrl: './auth-form-ui.component.html',
  styleUrls: ['./auth-form-ui.component.scss'],
})
export class AuthFormUiComponent {
  @Input() public parentGroup!: FormGroup;
  @Input() public submitButton!: string;
  @Input() public errors!: string[];
  @Input() public isPending!: boolean;

  @Output() public submit = new EventEmitter();

  public isVisible = false;

  onSubmit() {
    this.submit.emit();
  }

  onDeleteErrorMessage(index: number) {
    this.errors = this.errors.filter((_, i) => index !== i);
  }

  togglePasswordVisibility() {
    this.isVisible = !this.isVisible;
  }
}
