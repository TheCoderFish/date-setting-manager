import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateSettingFormPresentationComponent } from './date-setting-form-presentation.component';

describe('DateSettingFormPresentationComponent', () => {
  let component: DateSettingFormPresentationComponent;
  let fixture: ComponentFixture<DateSettingFormPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateSettingFormPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateSettingFormPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
