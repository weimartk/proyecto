import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GlobosPageRoutingModule } from './globos-routing.module';

import { GlobosPage } from './globos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GlobosPageRoutingModule
  ],
  declarations: [GlobosPage]
})
export class GlobosPageModule {}
