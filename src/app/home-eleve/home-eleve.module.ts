import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeElevePageRoutingModule } from './home-eleve-routing.module';

import { HomeElevePage } from './home-eleve.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeElevePageRoutingModule
  ],
  declarations: [HomeElevePage]
})
export class HomeElevePageModule {}
