import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsSheetComponent } from './cms-sheet.component';

describe('CmsSheetComponent', () => {
  let component: CmsSheetComponent;
  let fixture: ComponentFixture<CmsSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmsSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmsSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
