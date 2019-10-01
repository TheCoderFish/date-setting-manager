import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingDefaultPageComponent } from './booking-default-page.component';

describe('BookingDefaultPageComponent', () => {
  let component: BookingDefaultPageComponent;
  let fixture: ComponentFixture<BookingDefaultPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingDefaultPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingDefaultPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
