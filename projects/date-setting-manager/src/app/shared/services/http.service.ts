import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HttpService {
    constructor(
        private http: HttpClient,
    ) { }

    public httpGetRequest<T>(url: string, version?: string, options?: any): Observable<any> {
        const interceptableHeaders: HttpHeaders = this.createHeader(version);
        if (version && options) {
            return this.http.get<T>(url, { headers: interceptableHeaders, ...options });
        } else if (!version && options) {
            return this.http.get<T>(url, { ...options });
        } else if (version && !options) {
            return this.http.get<T>(url, { headers: interceptableHeaders });
        } else {
            return this.http.get<T>(url);
        }
    }

    public httpDeleteRequest<T = any>(url: string, version?: string, options?: any): Observable<any> {
        const interceptableHeaders: HttpHeaders = this.createHeader(version);
        if (version && options) {
            return this.http.delete<T>(url, { headers: interceptableHeaders, ...options });
        } else if (!version && options) {
            return this.http.delete<T>(url, { ...options });
        } else if (version && !options) {
            return this.http.delete<T>(url, { headers: interceptableHeaders });
        } else {
            return this.http.delete<T>(url);
        }
    }

    public httpPostRequest<T = any>(url: string, requestBody: any, version?: string, options?: any): Observable<any> {
        const interceptableHeaders: HttpHeaders = this.createHeader(version);
        if (version && options) {
            return this.http.post<T>(url, requestBody, { headers: interceptableHeaders, ...options });
        } else if (!version && options) {
            return this.http.post<T>(url, requestBody, { ...options });
        } else if (version && !options) {
            return this.http.post<T>(url, requestBody, { headers: interceptableHeaders });
        } else {
            return this.http.post<T>(url, requestBody);
        }
    }

    public httpPutRequest<T = any>(url: string, requestBody: any, version?: string, options?: any): Observable<any> {
        const interceptableHeaders: HttpHeaders = this.createHeader(version);
        if (version && options) {
            return this.http.put<T>(url, requestBody, { headers: interceptableHeaders, ...options });
        } else if (!version && options) {
            return this.http.put<T>(url, requestBody, { ...options });
        } else if (version && !options) {
            return this.http.put<T>(url, requestBody, { headers: interceptableHeaders });
        } else {
            return this.http.put<T>(url, requestBody);
        }
    }

    private createHeader(version: string): HttpHeaders {
        const httpHeaders: HttpHeaders = new HttpHeaders({
            'api-version': version,
        });
        return httpHeaders;
    }
}
