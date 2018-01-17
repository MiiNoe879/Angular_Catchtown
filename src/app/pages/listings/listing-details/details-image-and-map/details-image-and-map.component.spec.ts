import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsImageAndMapComponent } from './details-image-and-map.component';

describe('DetailsImageAndMapComponent', () => {
  let component: DetailsImageAndMapComponent;
  let fixture: ComponentFixture<DetailsImageAndMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsImageAndMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsImageAndMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
