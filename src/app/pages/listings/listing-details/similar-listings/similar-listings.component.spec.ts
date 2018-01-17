import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarListingsComponent } from './similar-listings.component';

describe('SimilarListingsComponent', () => {
  let component: SimilarListingsComponent;
  let fixture: ComponentFixture<SimilarListingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimilarListingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimilarListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
