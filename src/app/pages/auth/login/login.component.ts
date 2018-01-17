import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../../core/auth/auth.service';
import {DeviceService} from '../../../core/device.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isMobile;
  @ViewChild('form') form: NgForm;

  constructor(private device: DeviceService, private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.isMobile = this.device.isMobile();
    if (this.auth.isAuthenticated()) {
      this.router.navigate(['listings', 'import']);
    }
  }

  login() {
    const formValue = this.form.value as LoginForm;
    this.auth.login(formValue.email, formValue.password);
  }
}

interface LoginForm {
  email: string;
  password: string;
}
