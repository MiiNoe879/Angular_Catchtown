import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatStepper} from '@angular/material';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.scss']
})
export class ListPostComponent implements OnInit {

  @Input('stepper') stepper: MatStepper;

  @Output()
  stepProgress = new EventEmitter<number>();

  previousStep() {
    this.stepper.previous();
    this.stepProgress.emit(75);
  }

  constructor() { }

  ngOnInit() {
  }
}
