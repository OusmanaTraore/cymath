import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  // },
  {
    path: 'home-admin',
    loadChildren: () =>
      import('./home-admin/home-admin.module').then(
        (m) => m.HomeAdminPageModule
      ),
  },
  {
    path: 'home-eleve',
    loadChildren: () =>
      import('./home-eleve/home-eleve.module').then(
        (m) => m.HomeElevePageModule
      ),
  },
  {
    path: 'home-professeur',
    loadChildren: () =>
      import('./home-professeur/home-professeur.module').then(
        (m) => m.HomeProfesseurPageModule
      ),
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
