import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateSettingFormContainerComponent } from './date-setting-form-container.component';

describe('DateSettingFormContainerComponent', () => {
  let component: DateSettingFormContainerComponent;
  let fixture: ComponentFixture<DateSettingFormContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateSettingFormContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateSettingFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
