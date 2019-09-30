import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Setting, Booking } from '../../date-setting.model';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DateSettingPresenterService {

  private save: Subject<Setting>;
  public save$: Observable<Setting>;

  constructor(private fb: FormBuilder) {
    this.save = new Subject<Setting>();
    this.save$ = this.save.asObservable();
  }


  public buildForm(): FormGroup {
    return this.fb.group({
      bookableDays: [null, [Validators.required]],
      effectiveFrom: ['', [Validators.required]]
    });
  }


  public filterDateActive(d: Date) {
    const today = new Date();
    return d > today;
  }

  public filterDateUpcoming(d: Date, activeSetting: Booking) {
    const effectiveDate = new Date(activeSetting.effectiveFrom);
    const bookableDays = activeSetting.bookableDays;
    return d > new Date(effectiveDate.getTime() + 86400000 * bookableDays);
  }

  public saveBooking(bookingForm: FormGroup, currentSetting: Setting) {
    if (bookingForm.valid) {
      let booking: Booking = new Booking();
      booking = bookingForm.getRawValue();
      if (!currentSetting.active) {
        let setting: Setting = new Setting(booking, null);
        this.save.next(setting);
      } else {
        let setting: Setting = new Setting(currentSetting.active, booking);
        this.save.next(setting);
      }
    } else {
      //invalid form, throw error
    }
  }
}
