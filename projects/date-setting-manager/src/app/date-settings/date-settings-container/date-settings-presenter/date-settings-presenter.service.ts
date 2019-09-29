import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Booking, Setting } from '../../date-settings.model';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DateSettingsPresenterService {

  private bookingActive: Subject<Booking>;
  public bookingActive$: Observable<Booking>

  private bookingUpcoming: Subject<Setting>;
  public bookingUpcoming$: Observable<Setting>

  private newSetting: Subject<Setting>;
  public newSetting$: Observable<Setting>

  constructor(private fb: FormBuilder) {
    this.bookingActive = new Subject<Booking>();
    this.bookingActive$ = this.bookingActive.asObservable();

    this.bookingUpcoming = new Subject<Setting>();
    this.bookingUpcoming$ = this.bookingUpcoming.asObservable();

    this.newSetting = new Subject<Setting>();
    this.newSetting$ = this.newSetting.asObservable();
  }

  public buildForm(): FormGroup {
    return this.fb.group({
      bookableDays: [null, [Validators.required]],
      effectiveFrom: ['', [Validators.required]]
    });
  }

  public saveNewSetting() {
    //subscribers in the presentation are initialized later , suggest a fix for this
    setTimeout(() => {
      this.newSetting.next(new Setting(null, null));
    }, 0);
  }

  public saveBooking(bookingForm: FormGroup, active: Booking) {
    if (bookingForm.valid) {
      if (active === null) {
        let booking: Booking = new Booking();
        booking = bookingForm.getRawValue();
        this.bookingActive.next(booking);
      } else {
        let booking: Booking = new Booking();
        booking = bookingForm.getRawValue();
        let setting: Setting = new Setting(active, booking);
        this.bookingUpcoming.next(setting);
      }
    }
  }

  public initializeDateFilter(currentSetting?: Setting) {
    if (!currentSetting) {
      const today = new Date();
      return (d: Date) => {
        return d >= today
      }
    } else {
      console.log('here')
      return (d: Date) => {
        return this.upcomindDateValidation(d, currentSetting);
      }
    }
  }

  upcomindDateValidation(d, currentSetting): boolean {
    const dateInDb = this.parseDateFromDb(currentSetting.active.effectiveFrom);
    const daysToAdd = currentSetting.active.bookableDays
    const newValidDate = new Date(dateInDb.getTime() + 86400000 * daysToAdd);
    //new Date(new Date(this.currentSetting.active.effectiveFrom.toString().substring(0, 10)).getTime() + 86400000 * this.currentSetting.active.bookableDays)
    //return this.dateSettingPresenter.validateDates(d, activeDate);
    return d >= newValidDate;
  }

  private parseDateFromDb(date) {
    return new Date(date.toString().substring(0, 10));
  }
}
