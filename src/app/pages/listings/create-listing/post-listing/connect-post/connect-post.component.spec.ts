import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectPostComponent } from './connect-post.component';

describe('ConnectPostComponent', () => {
  let component: ConnectPostComponent;
  let fixture: ComponentFixture<ConnectPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
