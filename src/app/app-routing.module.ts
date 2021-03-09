import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './../app/home/home.component';
import { NosotrosComponent } from './../app/nosotros/nosotros.component';
import { CatasComponent } from './../app/catas/catas.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'nosotros',
    component: NosotrosComponent
  },
  {
    path: 'catas',
    component: CatasComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
