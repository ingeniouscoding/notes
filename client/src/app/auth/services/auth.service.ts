import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials extends LoginCredentials {
  name: string;
  password_confirmation: string;
}

export interface CheckEmailResponse {
  error?: string;
  isUnique?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly url = environment.url;
  private readonly api = environment.api;

  constructor(private http: HttpClient) { }

  login(credentials: LoginCredentials): Observable<User> {
    return this.http.post<User>(this.url + 'login', credentials);
  }

  register(credentials: RegisterCredentials): Observable<User> {
    return this.http.post<User>(this.url + 'register', credentials);
  }

  logout(): Observable<any> {
    return this.http.post<any>(this.url + 'logout', {});
  }

  getCsrfCookie() {
    this.http.get(this.url + 'sanctum/csrf-cookie')
      .subscribe();
  }

  getUser(): Observable<User> {
    return this.http.get<User>(this.api + 'user');
  }

  checkEmailAlreadyExist(email: string): Observable<CheckEmailResponse> {
    return this.http.get<CheckEmailResponse>(this.api + 'exists?email=' + email);
  }
}
