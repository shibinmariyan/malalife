import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pay2guruComponent } from './pay2guru.component';

describe('Pay2guruComponent', () => {
  let component: Pay2guruComponent;
  let fixture: ComponentFixture<Pay2guruComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pay2guruComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pay2guruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
