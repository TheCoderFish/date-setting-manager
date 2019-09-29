import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateSettingsContainerComponent } from './date-settings-container.component';

describe('DateSettingsContainerComponent', () => {
  let component: DateSettingsContainerComponent;
  let fixture: ComponentFixture<DateSettingsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateSettingsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateSettingsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
