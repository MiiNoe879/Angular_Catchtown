import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../core/auth/auth.service';
import {DeviceService} from '../../../core/device.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  isMobile;
  form: FormGroup;

  constructor(private device: DeviceService, private auth: AuthService, fb: FormBuilder, private router: Router) {
    this.form = fb.group({
      email: ['', Validators.required, this.emailAvailable.bind(this)],
      name: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.isMobile = this.device.isMobile();
    if (this.auth.isAuthenticated()) {
      this.router.navigate(['listings', 'import']);
    }
  }

  onChange() {
    console.log(this.form);
  }

  signup() {
    if (!this.form.invalid) {
      this.auth.signUp(this.form.value);
    }
  }

  emailAvailable(control: AbstractControl) {
    return new Promise((resolve, reject) => {
      this.auth.emailAvailable(control.value).subscribe(res => {
        res['response'].results[0].result ? resolve({emailTaken: true}) : resolve(null);
      });
    });
  }

}

interface SignupForm {
  email: string;
  name: string;
  password: string;
}
