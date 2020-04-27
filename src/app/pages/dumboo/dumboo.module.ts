import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DumbooPageRoutingModule } from './dumboo-routing.module';

import { DumbooPage } from './dumboo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DumbooPageRoutingModule
  ],
  declarations: [DumbooPage]
})
export class DumbooPageModule {}
