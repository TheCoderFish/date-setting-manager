import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DateSettingsContainerComponent } from './date-settings-container/date-settings-container.component';

const routes: Routes = [
  { path: '', component: DateSettingsContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DateSettingsRoutingModule { }
