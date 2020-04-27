import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DumbooPage } from './dumboo.page';

const routes: Routes = [
  {
    path: '',
    component: DumbooPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DumbooPageRoutingModule {}
