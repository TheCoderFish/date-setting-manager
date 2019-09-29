import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DateSettingsRoutingModule } from './date-settings-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DateSettingsContainerComponent } from './date-settings-container/date-settings-container.component';
import { DateSettingsPresentationComponent } from './date-settings-container/date-settings-presentation/date-settings-presentation.component';

@NgModule({
  declarations: [DateSettingsContainerComponent, DateSettingsPresentationComponent],
  imports: [
    CommonModule,
    DateSettingsRoutingModule,
    SharedModule
  ]
})
export class DateSettingsModule { }
