import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateSettingPresentationComponent } from './date-setting-presentation.component';

describe('DateSettingPresentationComponent', () => {
  let component: DateSettingPresentationComponent;
  let fixture: ComponentFixture<DateSettingPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateSettingPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateSettingPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
