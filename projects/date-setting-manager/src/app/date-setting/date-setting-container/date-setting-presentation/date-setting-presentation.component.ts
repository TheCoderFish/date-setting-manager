import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { DateSettingPresenterService } from '../date-setting-presenter/date-setting-presenter.service';
import { Setting } from '../../../date-settings/date-settings.model';

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
      this._currentSetting = { ...value };
    }
  }

  public get currentSetting() {
    if (this._currentSetting) {
      return this._currentSetting;
    }
    return null;
  }

  private _currentSetting: Setting;

  private showUpcoming: boolean;

  constructor(private dateSettingPresenter: DateSettingPresenterService) { }

  ngOnInit() {
    this.showUpcoming = false;
  }

  //move logic to presenter
  public addUpcomingBooking() {
    this.showUpcoming = true;
  }

}
