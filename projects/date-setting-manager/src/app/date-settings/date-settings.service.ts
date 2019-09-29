import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../shared/services/http.service';
import { environment } from '../../environments/environment.develop';

import { Setting, Booking } from './date-settings.model';

@Injectable({
  providedIn: 'root'
})
export class DateSettingsService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpService) { }

  public getSetting(): Observable<Setting> {
    const url = this.baseUrl + 'setting'
    return this.http.httpGetRequest<Setting>(url);
  }

  public getSettingsById(id: string): Observable<Setting> {
    const url = `${this.baseUrl}settings/${id}`
    return this.http.httpGetRequest<Setting>(url);
  }

  public updateBooking(value: Setting, id): Observable<Setting> {
    const url = `${this.baseUrl}settings/${id}`;
    return this.http.httpPutRequest(url, value, '1.0');
  }

  public addNewSetting(setting): Observable<Setting> {
    const url = this.baseUrl + 'settings';
    return this.http.httpPostRequest(url, setting, '1.0');
  }
}
