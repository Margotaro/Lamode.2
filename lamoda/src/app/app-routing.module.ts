import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SectionDetailComponent} from './section-detail/section-detail.component';

const routes: Routes = [
  { path: 'detail/:name', component: SectionDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
