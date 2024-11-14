import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeElevePage } from './home-eleve.page';

const routes: Routes = [
  {
    path: '',
    component: HomeElevePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeElevePageRoutingModule {}
