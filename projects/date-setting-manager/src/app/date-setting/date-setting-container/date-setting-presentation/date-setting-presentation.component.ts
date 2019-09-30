import { Component, OnInit, ChangeDetectionStrategy, Input, ViewChild, TemplateRef, Output, EventEmitter } from '@angular/core';
import { DateSettingPresenterService } from '../date-setting-presenter/date-setting-presenter.service';
import { Setting } from '../../date-setting.model';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-date-setting-presentation-ui',
  templateUrl: './date-setting-presentation.component.html',
  styleUrls: ['./date-setting-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [DateSettingPresenterService]
})
export class DateSettingPresentationComponent implements OnInit {

  @Input()
  public set currentSetting(value: Setting) {
    if (value) {
      this._currentSetting = value;
    }
  }

  public get currentSetting(): Setting {
    if (this._currentSetting) {
      return this._currentSetting;
    }
    return null;
  }

  public get isActive() {
    return this.currentSetting.active === null;
  }

  private _currentSetting: Setting;
  private showUpcoming: boolean;
  private bookingForm: FormGroup;

  @Output()
  private saveBooking: EventEmitter<Setting>;

  @ViewChild('mat-datepicker-toggle', { read: TemplateRef })
  private toggleButton;

  constructor(private dateSettingPresenter: DateSettingPresenterService) {
    this.saveBooking = new EventEmitter<Setting>();
  }

  ngOnInit() {
    this.showUpcoming = false;
    this.bookingForm = this.dateSettingPresenter.buildForm();
    this.dateSettingPresenter.save$.subscribe(setting => {
      this.saveBooking.emit(setting);
    });

  }

  public dateFilter = (d: Date) => {
    if (!this.currentSetting.active) {
      return this.dateSettingPresenter.filterDateActive(d);
    } else {
      return this.dateSettingPresenter.filterDateUpcoming(d, this.currentSetting.active);
    }
  }

  //move logic to presenter
  public addUpcomingBooking() {
    this.showUpcoming = true;
  }

  public save() {
    this.dateSettingPresenter.saveBooking(this.bookingForm, this.currentSetting);

  }
}
