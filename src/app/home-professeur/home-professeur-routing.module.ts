import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeProfesseurPage } from './home-professeur.page';

const routes: Routes = [
  {
    path: '',
    component: HomeProfesseurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeProfesseurPageRoutingModule {}
