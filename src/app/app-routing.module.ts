import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { FormInscriptionComponent } from './pages/form-inscription/form-inscription.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';


const routes: Routes = [
  {path : "" , component : LandingPageComponent},
  {path : "home" , component : HomePageComponent},
  {path : "inscription" , component : FormInscriptionComponent},
  {path : "user-profile" , component : UserProfileComponent},
  {path : "**" , component : Error404PageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
