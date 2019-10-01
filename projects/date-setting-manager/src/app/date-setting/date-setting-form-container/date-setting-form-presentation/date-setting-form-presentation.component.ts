import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { DateSettingFormPresenterService } from '../date-setting-form-presenter/date-setting-form-presenter.service';
import { FormGroup } from '@angular/forms';
import { HomePresenterService } from '../../home-container/home-presenter/home-presenter.service';
import { Setting } from '../../date-setting.model';

@Component({
  selector: 'app-date-setting-form-presentation-ui',
  templateUrl: './date-setting-form-presentation.component.html',
  styleUrls: ['./date-setting-form-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [DateSettingFormPresenterService]
})
export class DateSettingFormPresentationComponent implements OnInit {

  private _currentSetting: Setting;
  private bookingForm: FormGroup;
  @Output()
  private saveBooking: EventEmitter<Setting>;

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

  constructor(private dateSettingFormPresenter: DateSettingFormPresenterService, private homePresenterService: HomePresenterService) {
    this.saveBooking = new EventEmitter<Setting>();
  }


  ngOnInit() {
    this.bookingForm = this.dateSettingFormPresenter.buildForm();
    this.homePresenterService.currentSetting$.subscribe(setting => {
      this.currentSetting = setting;
    })

    this.dateSettingFormPresenter.save$.subscribe(setting => {
      this.saveBooking.emit(setting);

    });

  }

  public dateFilter = (d: Date) => {
    if (!this.currentSetting.active) {
      return this.dateSettingFormPresenter.filterDateActive(d);
    } else {
      return this.dateSettingFormPresenter.filterDateUpcoming(d, this.currentSetting.active);
    }
  }

  public save() {
    this.dateSettingFormPresenter.saveBooking(this.bookingForm, this.currentSetting);
  }




}
