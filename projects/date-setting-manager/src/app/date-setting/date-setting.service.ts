import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Setting } from './date-setting.model';
import { environment } from '../../environments/environment.develop';

@Injectable()
export class DateSettingService {
    private baseUrl: string;
    constructor(private http: HttpClient) {
        this.baseUrl = environment.baseUrl;
    }

    public getSetting(): Observable<Setting> {
        const url = `${this.baseUrl}/setting`
        return this.http.get<Setting>(url);
    }

    public saveSetting(setting: Setting): Observable<Setting> {
        const url = `${this.baseUrl}/setting`;
        return this.http.post<Setting>(url, setting);

    }
}