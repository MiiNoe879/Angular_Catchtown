import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MessengerComponent} from './messenger.component';
import {MessageInterfaceComponent} from './message-interface/message-interface.component';
import {DateTimePickerComponent} from '../../components/date-time-picker/date-time-picker.component';

const routes: Routes = [
  {
    path: '',
    component: MessengerComponent,
    children: [
      {
        path: '',
        component: MessageInterfaceComponent
      },
      {
        path: 'date-time',
        component: DateTimePickerComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessengerRoutingModule { }
