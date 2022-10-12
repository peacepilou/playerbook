import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormInscriptionComponent } from './pages/form-inscription/form-inscription.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';


const routes: Routes = [
  {path : "" , component : LandingPageComponent},
  {path : "home" , component : HomePageComponent},
  {path : "inscription" , component : FormInscriptionComponent},
  {path : "user-profile" , component : UserProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
