import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateSettingContainerComponent } from './date-setting-container.component';

describe('DateSettingContainerComponent', () => {
  let component: DateSettingContainerComponent;
  let fixture: ComponentFixture<DateSettingContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateSettingContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateSettingContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
