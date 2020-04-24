import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GlobosPage } from './globos.page';

const routes: Routes = [
  {
    path: '',
    component: GlobosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GlobosPageRoutingModule {}
