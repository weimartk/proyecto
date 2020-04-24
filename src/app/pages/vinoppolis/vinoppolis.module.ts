import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VinoppolisPageRoutingModule } from './vinoppolis-routing.module';

import { VinoppolisPage } from './vinoppolis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VinoppolisPageRoutingModule
  ],
  declarations: [VinoppolisPage]
})
export class VinoppolisPageModule {}
