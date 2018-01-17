import {EventEmitter, Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class AuthService implements OnInit {

  token;
  private loggedIn = new Subject<boolean>();
  logInStatusChange = this.loggedIn.asObservable();

  constructor(private http: HttpClient, private router: Router) {
    this.checkLogin();
  }

  ngOnInit() {
    this.checkLogin();
  }

  checkLogin() {
    this.token = sessionStorage.getItem('token');

    if (this.token) {
      this.loggedIn.next(true);
    }
  }

  login(email: string, password: string) {
    const body = new FormData();
    body.append('email', email);
    body.append('password', password);
    this.http.post(`${environment.baseEndpoint}/api/account/sign-in/`, body)
      .subscribe(result => {
        this.token = result['response'].results[0].token;
        sessionStorage.setItem('token', this.token);
        this.loggedIn.next(true);
        this.router.navigate(['listings/import']);
      });
  }

  logout() {
    this.token = '';
    sessionStorage.removeItem('token');
    this.loggedIn.next(false);
    this.router.navigate(['auth/login']);
  }

  isAuthenticated() {
    return Boolean(this.token);
  }

  signUp(form) {
    const body = new FormData();
    body.append('email', form.email);
    body.append('name', form.name);
    body.append('password', form.password);
    this.http.post(`http://45.55.147.160/api/account/sign-up/`, body)
      .subscribe(result => {
        this.token = result['response'].results[0].token;
        sessionStorage.setItem('token', this.token);
        this.loggedIn.next(true);
        this.router.navigate(['listings/import']);
      });
  }

  emailAvailable(email: string) {
    return this.http.get(`${environment.baseEndpoint}/api/account/check-email/?email=${email}`);
  }
}
