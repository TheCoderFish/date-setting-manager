import { Component, OnInit, OnDestroy } from '@angular/core';
import { DateSettingsService } from '../date-settings.service';
import { ActivatedRoute, Router } from '@angular/router';
import { pluck, switchMap, take, filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Setting, Booking } from '../date-settings.model';

@Component({
  selector: 'app-date-settings-container',
  templateUrl: './date-settings-container.component.html',
  styleUrls: ['./date-settings-container.component.scss']
})
export class DateSettingsContainerComponent implements OnInit, OnDestroy {

  public currentSetting$: Observable<Setting>;

  constructor(private dateSettingsService: DateSettingsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    //this.currentSetting$ = this.dateSettingsService.getSetting();
    this.dateSettingsService.getSetting().subscribe(console.log);
  }

  public saveActiveBooking(value: Booking) {
    const id = this.route.snapshot.params.id;
    const setting = new Setting(value, null);
    this.dateSettingsService.updateBooking(setting, id).subscribe(response => {
      this.currentSetting$ = this.dateSettingsService.getSettingsById(id);
    });
  }

  public saveUpcomingBooking(value: Setting) {
    const id = this.route.snapshot.params.id;
    this.dateSettingsService.updateBooking(value, id).subscribe(response => {
      this.currentSetting$ = this.dateSettingsService.getSettingsById(id);
    });
  }



  public saveNewSetting(value: Setting) {
    this.dateSettingsService.addNewSetting(value).subscribe(setting => {
      this.router.navigate([`date-settings/${setting}`]);
    });

  }

  ngOnDestroy() {
    //emit subject to unsubscribe
  }

}
