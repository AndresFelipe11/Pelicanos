import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralModule } from "./general/GeneralModule";
import { HomeComponent } from './general/home/home.component';
import { PageNotFoundComponent } from './general/page-not-found/page-not-found.component';
import { PlayerRoutingModule } from './player/player-routing.module';
import { UsersRoutingModule } from './users/users-routing.module';
import { ElemetsModule } from './elemets/elemets.module';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    GeneralModule,
    PlayerRoutingModule,
    UsersRoutingModule,
    ElemetsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
