import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportListingComponent } from './import-listing.component';

describe('ImportListingComponent', () => {
  let component: ImportListingComponent;
  let fixture: ComponentFixture<ImportListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
