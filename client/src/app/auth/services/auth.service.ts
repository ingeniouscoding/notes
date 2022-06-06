import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { User } from '../models/user';

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

  login(credentials: LoginCredentials): Observable<User> {
    return this.http.post<User>(this.url + 'login', credentials);
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
