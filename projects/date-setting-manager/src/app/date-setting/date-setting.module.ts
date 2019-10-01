import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DateSettingRoutingModule } from './date-setting-routing.module';
import { DateSettingService } from './date-setting.service';
import { SharedModule } from '../shared/shared.module';
import { HomeContainerComponent } from './home-container/home-container.component';
import { HomePresentationComponent } from './home-container/home-presentation/home-presentation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DateSettingFormContainerComponent } from './date-setting-form-container/date-setting-form-container.component';
import { DateSettingFormPresentationComponent } from './date-setting-form-container/date-setting-form-presentation/date-setting-form-presentation.component';
import { BookingDefaultPageComponent } from './booking-default-page/booking-default-page.component';

@NgModule({
  declarations: [
    HomeContainerComponent,
    HomePresentationComponent,
    DateSettingFormContainerComponent,
    DateSettingFormPresentationComponent,
    BookingDefaultPageComponent
  ],
  imports: [
    CommonModule,
    DateSettingRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [
    DateSettingService
  ]
})
export class DateSettingModule { }
