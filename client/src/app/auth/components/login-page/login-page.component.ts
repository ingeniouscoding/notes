import { Component, OnInit } from '@angular/core';

import { AuthService } from '@notes/auth/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  onCLick() {
    this.auth.register();
  }
}
