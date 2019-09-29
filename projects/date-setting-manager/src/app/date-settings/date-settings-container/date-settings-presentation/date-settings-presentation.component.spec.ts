import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateSettingsPresentationComponent } from './date-settings-presentation.component';

describe('DateSettingsPresentationComponent', () => {
  let component: DateSettingsPresentationComponent;
  let fixture: ComponentFixture<DateSettingsPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateSettingsPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateSettingsPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
