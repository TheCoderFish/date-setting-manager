import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DateSettingContainerComponent } from './date-setting-container/date-setting-container.component';
import { HomeContainerComponent } from './home-container/home-container.component';
import { TestComponent } from './test/test.component';
import { BookingSuccessComponent } from './booking-success/booking-success.component';
import { DateSettingFormContainerComponent } from './date-setting-form-container/date-setting-form-container.component';

const routes: Routes = [
  {
    path: '', component: HomeContainerComponent,
    children: [
      {
        path: 'add-booking', component: DateSettingFormContainerComponent,
      }, {
        path: 'booking-success', component: BookingSuccessComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DateSettingRoutingModule { }
