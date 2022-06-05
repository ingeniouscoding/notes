import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials extends LoginCredentials {
  name: string;
  password_confirmation: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly url = environment.url;

  constructor(private http: HttpClient) { }

  login(credentials: LoginCredentials) {
    this.http.post(this.url + 'login', credentials)
      .subscribe();
  }

  register(credentials: RegisterCredentials) {
    this.http.post(this.url + 'register', credentials)
      .subscribe();
  }

  getCsrfCookie() {
    this.http.get(this.url + 'sanctum/csrf-cookie')
      .subscribe();
  }

  getUser() {
    this.http.get(this.url + 'api/user')
      .subscribe(console.log);
  }
}
