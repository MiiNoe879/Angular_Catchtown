import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {

  @Input('user') user;

  @Output() logout: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(this.user);
  }

  logUserOut() {
    this.logout.emit();
  }

  userAvatar() {
    return this.user.photo ? this.user.photo : '/assets/icons/user-white.svg';
  }

}
