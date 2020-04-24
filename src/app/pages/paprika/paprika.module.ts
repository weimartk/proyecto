import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaprikaPageRoutingModule } from './paprika-routing.module';

import { PaprikaPage } from './paprika.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaprikaPageRoutingModule
  ],
  declarations: [PaprikaPage]
})
export class PaprikaPageModule {}
