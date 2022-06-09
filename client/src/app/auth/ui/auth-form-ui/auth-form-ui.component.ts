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
  @Input() public errorMessage!: string[];
  @Output() public submit = new EventEmitter();

  onSubmit() {
    this.submit.emit();
  }
}
