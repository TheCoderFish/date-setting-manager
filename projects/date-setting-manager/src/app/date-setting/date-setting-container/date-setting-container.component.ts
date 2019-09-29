import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { Setting } from '../../date-settings/date-settings.model';
import { DateSettingService } from '../date-setting.service';
import { pluck, mapTo, tap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-date-setting-container',
  templateUrl: './date-setting-container.component.html',
  styleUrls: ['./date-setting-container.component.scss']
})
export class DateSettingContainerComponent implements OnInit {

  public currentSetting$: Observable<Setting>;

  constructor(private dateSettingService: DateSettingService) { }

  ngOnInit() {
    timer(0, 5000).pipe(
      tap(() => this.currentSetting$ = this.dateSettingService.getSetting())
    ).subscribe();
  }
}
