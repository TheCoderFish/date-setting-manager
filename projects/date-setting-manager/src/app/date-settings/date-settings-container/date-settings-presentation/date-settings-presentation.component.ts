import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { DateSettingsPresenterService } from '../date-settings-presenter/date-settings-presenter.service';
import { Setting, Booking } from '../../date-settings.model';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-date-settings-presentation-ui',
  templateUrl: './date-settings-presentation.component.html',
  styleUrls: ['./date-settings-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [DateSettingsPresenterService]
})
export class DateSettingsPresentationComponent implements OnInit {

  private _currentSetting: Setting;
  private addUpcoming: boolean = false;
  private bookingForm: FormGroup;
  private isActive: boolean;
  private showAddButton: boolean;
  private dateFilter;

  @Input() set currentSetting(value: Setting) {
    if (value) {
      this._currentSetting = value;
    }
  }

  get currentSetting(): Setting {
    if (this._currentSetting) {
      return this._currentSetting;
    }
    return null;
  }

  get active() {
    if (this.currentSetting) {
      return this._currentSetting.active
    }
    return null;
  }





  get upcoming() {
    if (this.currentSetting) {
      return this._currentSetting.upcoming
    }
    return null;
  }

  @Output()
  public saveActiveBooking: EventEmitter<Booking>;

  @Output()
  public saveUpcomingBooking: EventEmitter<Setting>;

  @Output()
  public saveNewSetting: EventEmitter<Setting>;


  constructor(private dateSettingPresenter: DateSettingsPresenterService, private route: ActivatedRoute) {
    this.saveActiveBooking = new EventEmitter<Booking>();
    this.saveUpcomingBooking = new EventEmitter<Setting>();
    this.saveNewSetting = new EventEmitter<Setting>();

  }

  ngOnInit() {
    this.bookingForm = this.dateSettingPresenter.buildForm();

    if (!this.route.snapshot.params.id) {
      this.createNewSetting();
    }

    this.dateSettingPresenter.newSetting$.subscribe(setting => {
      this.saveNewSetting.emit(setting);
    })

    this.dateSettingPresenter.bookingActive$.subscribe(activeBooking => {
      this.saveActiveBooking.emit(activeBooking);
    });

    this.dateSettingPresenter.bookingUpcoming$.subscribe(upcomingBooking => {      
      this.saveUpcomingBooking.emit(upcomingBooking);
    });

    this.dateFilter = this.dateSettingPresenter.initializeDateFilter(this.currentSetting);
  }

  public save() {
    this.dateSettingPresenter.saveBooking(this.bookingForm, this.active);
  }

  public createNewSetting() {
    this.dateSettingPresenter.saveNewSetting();
  }


}
