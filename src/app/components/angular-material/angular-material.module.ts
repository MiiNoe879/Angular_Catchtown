import { NgModule } from '@angular/core';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule, MatIconModule, MatMenuModule, MatProgressBarModule} from '@angular/material';

@NgModule({
  imports: [
    MatStepperModule,
    MatButtonModule,
    MatProgressBarModule,
    MatMenuModule,
    MatIconModule
  ],
  exports: [
    MatStepperModule,
    MatButtonModule,
    MatProgressBarModule,
    MatMenuModule,
    MatIconModule
  ]
})
export class AngularMaterialModule { }
