import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DateSettingContainerComponent } from './date-setting-container/date-setting-container.component';

const routes: Routes = [
  { path: '', component: DateSettingContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DateSettingRoutingModule { }
