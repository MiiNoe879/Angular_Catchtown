import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListedComponent } from './post-listed.component';

describe('PostListedComponent', () => {
  let component: PostListedComponent;
  let fixture: ComponentFixture<PostListedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostListedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
