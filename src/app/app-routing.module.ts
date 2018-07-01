import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntroComponent } from './intro/intro.component';
import { MainTableComponent } from './main-table/main-table.component';
import { MainDashComponent } from './main-dash/main-dash.component';

const routes: Routes = [
  { path: '', component:  IntroComponent},
  { path: 'table', component: MainTableComponent },
  { path: 'dash', component: MainDashComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [
		RouterModule
	]
})
export class AppRoutingModule { }
