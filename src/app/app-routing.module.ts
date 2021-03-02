import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SitesEscaladeComponent} from './components/sites-escalade/sites-escalade.component';
import {HomeComponent} from './components/home/home.component';
import {SiteEscaladeComponent} from './components/site-escalade/site-escalade.component';

const routes: Routes = [
  {path:"site-escalade", component:SiteEscaladeComponent},
  {path:"sites-escalade", component:SitesEscaladeComponent},
  {path:"", component:HomeComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
