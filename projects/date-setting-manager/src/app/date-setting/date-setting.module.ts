import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DateSettingRoutingModule } from './date-setting-routing.module';
import { DateSettingContainerComponent } from './date-setting-container/date-setting-container.component';
import { DateSettingService } from './date-setting.service';
import { DateSettingPresentationComponent } from './date-setting-container/date-setting-presentation/date-setting-presentation.component';
import { SharedModule } from '../shared/shared.module';
import { TestComponent } from './test/test.component';
import { HomeContainerComponent } from './home-container/home-container.component';
import { HomePresentationComponent } from './home-container/home-presentation/home-presentation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookingSuccessComponent } from './booking-success/booking-success.component';
import { DateSettingFormContainerComponent } from './date-setting-form-container/date-setting-form-container.component';
import { DateSettingFormPresentationComponent } from './date-setting-form-container/date-setting-form-presentation/date-setting-form-presentation.component';

@NgModule({
  declarations: [
    DateSettingContainerComponent,
    DateSettingPresentationComponent,
    TestComponent,
    HomeContainerComponent,
    HomePresentationComponent,
    BookingSuccessComponent,
    DateSettingFormContainerComponent,
    DateSettingFormPresentationComponent
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
