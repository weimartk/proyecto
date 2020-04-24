import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VinoppolisPage } from './vinoppolis.page';

const routes: Routes = [
  {
    path: '',
    component: VinoppolisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VinoppolisPageRoutingModule {}
