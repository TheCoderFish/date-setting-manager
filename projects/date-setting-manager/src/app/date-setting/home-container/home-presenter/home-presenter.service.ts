import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Setting } from '../../date-setting.model';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomePresenterService {
  private currentSetting: Subject<Setting>;
  public currentSetting$: Observable<Setting>;

  constructor() {
    this.currentSetting = new Subject<Setting>();
    this.currentSetting$ = this.currentSetting.asObservable();
  }

  public saveSetting(value: Setting) {
    this.currentSetting.next(value);
  }

}
