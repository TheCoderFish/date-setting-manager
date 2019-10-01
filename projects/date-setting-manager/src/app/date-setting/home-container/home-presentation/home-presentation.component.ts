import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Setting } from '../../date-setting.model';
import { HomePresenterService } from '../home-presenter/home-presenter.service';
import { DateSettingPresenterService } from '../../date-setting-container/date-setting-presenter/date-setting-presenter.service';

@Component({
  selector: 'app-home-presentation-ui',
  templateUrl: './home-presentation.component.html',
  styleUrls: ['./home-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [HomePresenterService]
})
export class HomePresentationComponent implements OnInit {


  @Input()
  public set currentSetting(value: Setting) {
    if (value) {
      this._currentSetting = value;
    }
  }

  public get currentSetting(): Setting {
    return this._currentSetting;
  }

  private _currentSetting: Setting = {};


  constructor(private homePresenterService: HomePresenterService) {
  }

  ngOnInit() {

  }
}