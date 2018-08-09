import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginModel} from './models/login.model';
import {RegisterModel} from './models/register.model';
import {Observable} from 'rxjs/index';

const appKey = 'kid_r1HycTbBm';
const appSecret = 'db4e1eeb96bf400ebf492af72bf8c75f';
const registerUrl = `https://baas.kinvey.com/user/${appKey}`;
const loginUrl = `https://baas.kinvey.com/user/${appKey}/login`;
const logoutUrl = `https://baas.kinvey.com/user/${appKey}/_logout`;

@Injectable()
export class AuthService {
  private currentAuthtoken: string;

  constructor(
    private http: HttpClient
  ) { }

  login(loginModel: LoginModel) {
    return this.http.post(
      loginUrl,
      JSON.stringify(loginModel),
      {
        headers: this.createAuthHeaders('Basic')
      }
    );
  }

  register(registerModel: RegisterModel): Observable<Object> {
    return this.http.post(
      registerUrl,
      JSON.stringify(registerModel),
      {
        headers: this.createAuthHeaders('Basic')
      }
    );
  }

  logout() {
    return this.http.post(
      logoutUrl,
      {},
      {
        headers: this.createAuthHeaders('Kinvey')
      }
    );
  }

  isLoggedIn() {
    const authtoken: string = localStorage.getItem('authtoken');

    return authtoken === this.currentAuthtoken;
  }

  get authtoken() {
    return this.currentAuthtoken;
  }

  set authtoken(value: string) {
    this.currentAuthtoken = value;
  }

  private createAuthHeaders(type: string): HttpHeaders {
    if (type === 'Basic') {
      return new HttpHeaders({
        'Authorization': `Basic ${btoa(`${appKey}:${appSecret}`)}`,
        'Content-Type': 'application/json'
      });
    } else {
      return new HttpHeaders({
        'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
        'Content-Type': 'application/json'
      });
    }
  }
}
