import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DateSettingRoutingModule } from './date-setting-routing.module';
import { DateSettingContainerComponent } from './date-setting-container/date-setting-container.component';
import { DateSettingService } from './date-setting.service';
import { DateSettingPresentationComponent } from './date-setting-container/date-setting-presentation/date-setting-presentation.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DateSettingContainerComponent, DateSettingPresentationComponent],
  imports: [
    CommonModule,
    DateSettingRoutingModule,
    SharedModule
  ],
  providers:[
    DateSettingService
  ]
})
export class DateSettingModule { }
