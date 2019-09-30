import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { Setting } from '../date-setting.model';
import { DateSettingService } from '../date-setting.service';
import { pluck, mapTo, tap, takeUntil, map } from 'rxjs/operators';

@Component({
  selector: 'app-date-setting-container',
  templateUrl: './date-setting-container.component.html',
  styleUrls: ['./date-setting-container.component.scss']
})
export class DateSettingContainerComponent implements OnInit {

  public currentSetting$: Observable<Setting>;

  constructor(private dateSettingService: DateSettingService) { }

  ngOnInit() {
    timer(0, 20000).pipe(
      tap(() => this.currentSetting$ = this.dateSettingService.getSetting().pipe(map(response => new Setting(response.active, response.upcoming))))
    ).subscribe();
  }

  public saveBooking(setting: Setting) {
    this.dateSettingService.saveSetting(setting).subscribe(setting => {
      console.log(setting);
      this.currentSetting$ = this.dateSettingService.getSetting().pipe(map(response => new Setting(response.active, response.upcoming)));
    });
  }
}
