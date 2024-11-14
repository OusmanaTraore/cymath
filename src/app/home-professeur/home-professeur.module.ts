import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeProfesseurPageRoutingModule } from './home-professeur-routing.module';

import { HomeProfesseurPage } from './home-professeur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeProfesseurPageRoutingModule
  ],
  declarations: [HomeProfesseurPage]
})
export class HomeProfesseurPageModule {}
