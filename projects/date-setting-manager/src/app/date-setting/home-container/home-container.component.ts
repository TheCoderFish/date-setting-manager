import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { Setting } from '../date-setting.model';
import { DateSettingService } from '../date-setting.service';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent implements OnInit {

  public currentSetting$: Observable<Setting>;

  constructor(private dateSettingService: DateSettingService) { }

  ngOnInit() {
    timer(0, 3000).pipe(
      tap(() => this.currentSetting$ = this.dateSettingService.getSetting().pipe(map(response => new Setting(response.active, response.upcoming)))
      )
    ).subscribe();
  }

}
