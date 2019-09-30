import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Setting, Booking } from '../../../date-settings/date-settings.model';

@Injectable({
  providedIn: 'root'
})
export class DateSettingPresenterService {

  constructor(private fb: FormBuilder) { }


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
    const bookableDays = activeSetting.bookableDays + 1;
    return d > new Date(effectiveDate.getTime() + 86400000 * bookableDays);
  }
}
