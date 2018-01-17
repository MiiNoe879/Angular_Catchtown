import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../core/auth/auth.service';
import {UserService} from '../../core/auth/user.service';
import {DeviceService} from '../../core/device.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isSidenavActive = false;
  isMobile;
  isAuthenticated = false;
  userInfo;

  constructor(private router: Router, private device: DeviceService, private auth: AuthService, private user: UserService) { }

  ngOnInit() {
    this.isMobile = this.device.isMobile();
    this.user.userInfoUpdated.subscribe(user => {
      this.isAuthenticated = true;
      this.userInfo = user;
    });
    this.auth.checkLogin();
  }

  logout() {
    this.auth.logout();
  }

  showHeader() {
    return !(this.router.url.indexOf('login') !== -1
      || this.router.url.indexOf('signup') !== -1
      || this.router.url === '/'
      || this.router.url.indexOf('admin') !== -1);
  }

  isLogoOnly() {
    return Boolean(this.router.url.indexOf('listings/post') !== -1);
  }

}
