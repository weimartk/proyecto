import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaprikaPage } from './paprika.page';

const routes: Routes = [
  {
    path: '',
    component: PaprikaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaprikaPageRoutingModule {}
