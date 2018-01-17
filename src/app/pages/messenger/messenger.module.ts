import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessengerRoutingModule } from './messenger-routing.module';
import { MessengerComponent } from './messenger.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PeopleComponent } from './sidebar/people/people.component';
import { MessageInterfaceComponent } from './message-interface/message-interface.component';
import {SearchComponent} from './sidebar/search/search.component';
import {MessageComponent} from './message-interface/message/message.component';
import { MessageInputComponent } from './message-interface/message-input/message-input.component';
import {DateTimePickerModule} from 'ng-pick-datetime';
import {DateTimePickerComponent} from '../../components/date-time-picker/date-time-picker.component';

@NgModule({
  imports: [
    CommonModule,
    MessengerRoutingModule,
    DateTimePickerModule
  ],
  declarations: [
    MessengerComponent,
    SidebarComponent,
    PeopleComponent,
    MessageInterfaceComponent,
    SearchComponent,
    MessageComponent,
    MessageInputComponent,
    DateTimePickerComponent
  ]
})
export class MessengerModule { }
