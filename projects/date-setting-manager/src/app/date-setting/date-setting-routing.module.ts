import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeContainerComponent } from './home-container/home-container.component';
import { DateSettingFormContainerComponent } from './date-setting-form-container/date-setting-form-container.component';
import { BookingDefaultPageComponent } from './booking-default-page/booking-default-page.component';

const routes: Routes = [
  /* { path: '', redirectTo: 'add-booking', pathMatch: 'full' }, */
  {
    path: '', component: HomeContainerComponent,
    children: [
      {
        path: 'add-booking', component: DateSettingFormContainerComponent,
      }, {
        path: 'booking-success', component: BookingDefaultPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DateSettingRoutingModule { }
