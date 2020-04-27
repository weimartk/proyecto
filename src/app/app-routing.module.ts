import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)},
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'paprika',
    loadChildren: () => import('./pages/paprika/paprika.module').then( m => m.PaprikaPageModule)
  },
  {
    path: 'vinoppolis',
    loadChildren: () => import('./pages/vinoppolis/vinoppolis.module').then( m => m.VinoppolisPageModule)
  },
  {
    path: 'globos',
    loadChildren: () => import('./pages/globos/globos.module').then( m => m.GlobosPageModule)
  },
  {
    path: 'dumbo',
    loadChildren: () => import('./pages/dumbo/dumbo.module').then( m => m.DumboPageModule)
  },
  {
    path: 'details/:id',
    loadChildren: () => import('./pages/todo-details/todo-details.module').then( m => m.TodoDetailsPageModule)
  },
  {path: 'details', loadChildren: () => import ('./pages/todo-details/todo-details.module').then( m => m.TodoDetailsPageModule)},
  {
    path: 'dumboo',
    loadChildren: () => import('./pages/dumboo/dumboo.module').then( m => m.DumbooPageModule)
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
