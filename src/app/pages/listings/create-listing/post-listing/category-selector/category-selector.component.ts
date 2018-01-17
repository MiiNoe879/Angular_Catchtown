import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PostListingService} from '../../../../../core/listings/post-listing.service';

@Component({
  selector: 'app-category-selector',
  templateUrl: './category-selector.component.html',
  styleUrls: ['./category-selector.component.scss']
})
export class CategorySelectorComponent implements OnInit {

  @Input('stepper') stepper;
  @Output()
  stepProgress = new EventEmitter<number>();

  categories = [
    {
      'uuid': '344da02e-1402-4785-a613-7c947f37e3ae',
      'name': 'Baby Products',
      'iconName': 'smiling-baby.png'
    },
    {
      'uuid': 'b416eaa8-a781-4bcf-bfd2-96d5d286310e',
      'name': 'Electronics',
      'iconName': 'responsive.png'
    },
    {
      'uuid': '1a7d5bab-9958-4bb4-b872-266b50b02aa8',
      'name': 'Furniture & Garden',
      'iconName': 'plants.png'
    },
    {
      'uuid': '703a706c-5f8e-4264-a412-a8c7322d05a1',
      'name': 'Auto',
      'iconName': 'car-repair.png'
    },
    {
      'uuid': 'f9393e08-82a4-49f8-883b-e3211e0893db',
      'name': 'Jobs',
      'iconName': 'briefcase.png'
    },
    {
      'uuid': '52284d01-59c7-4b54-b3ad-49d5997b00ec',
      'name': 'Everything Else',
      'iconName': 'package.png'
    },
  ];

  constructor(private post: PostListingService) { }

  ngOnInit() {
  }

  setCategory(uuid: string) {
    this.post.processCategory(uuid);
    this.nextStep();
  }

  nextStep() {
    this.stepper.next();
    this.stepProgress.emit(75);
  }

  previousStep() {
    this.stepper.previous();
    this.stepProgress.emit(25);
  }

}
