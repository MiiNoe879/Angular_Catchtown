import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class UserService {

  userInfo;
  private userInfoUpdate = new Subject<boolean>();
  userInfoUpdated = this.userInfoUpdate.asObservable();

  constructor(private auth: AuthService, private http: HttpClient) {
    this.auth.logInStatusChange.subscribe(data => {
      if (data) {
        this.http.get(`${environment.baseEndpoint}/api/account/info/`)
          .subscribe(res => {
            this.userInfo = res['response'].results[0];
            this.userInfoUpdate.next(this.userInfo);
          });
      }
    });
  }
}
