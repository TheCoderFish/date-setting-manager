import { Component, OnInit } from '@angular/core';
import { DateSettingService } from '../date-setting.service';
import { Setting } from '../date-setting.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-date-setting-form-container',
  templateUrl: './date-setting-form-container.component.html',
  styleUrls: ['./date-setting-form-container.component.scss']
})
export class DateSettingFormContainerComponent implements OnInit {

  constructor(private dateSettingService: DateSettingService, private router: Router) { }

  ngOnInit() {
  }

  public saveBooking(setting: Setting) {
    this.dateSettingService.saveSetting(setting).subscribe(setting => {
      this.router.navigate(['date-setting/booking-success'])
    });
  }
}
