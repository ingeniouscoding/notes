import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly url = environment.url;

  constructor(private http: HttpClient) { }

  login() {
    const loginUrl = this.url + 'login';
    this.http.post(loginUrl, {})
      .subscribe();
  }

  register() {
    const registerUrl = this.url + 'register';
    this.http.post(registerUrl, {})
      .subscribe();
  }
}
