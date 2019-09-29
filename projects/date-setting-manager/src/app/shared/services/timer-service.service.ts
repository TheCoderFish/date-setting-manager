import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerServiceService {

  futureDate: Date;
  notifier: Observable<string>;

  cycle = (observer) => {
    const msInFuture = this.futureDate.getTime() - Date.now();
    if (msInFuture < 0) {
      console.log(`date ${this.futureDate.toISOString()}
            expected to be in the future, but was ${msInFuture} msec in the past, so stopping`);

      observer.complete();
    } else {
      timer(msInFuture).subscribe(x => {
        observer.next(`triggered at ${new Date().toISOString()}`);
        this.cycle(observer);
      });
    }
  }


  getTimer(): Observable<string> {
    this.notifier = new Observable(observer => {
      this.cycle(observer);
    });

    return this.notifier;
  }
}