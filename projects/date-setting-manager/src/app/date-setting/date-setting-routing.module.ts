import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DateSettingContainerComponent } from './date-setting-container/date-setting-container.component';
import { HomeContainerComponent } from './home-container/home-container.component';

const routes: Routes = [
  {
    path: '', component: HomeContainerComponent,
    children: [{
      path: 'active', component: DateSettingContainerComponent
    }]
  }
  /* { path: '', component: DateSettingContainerComponent }, */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DateSettingRoutingModule { }
