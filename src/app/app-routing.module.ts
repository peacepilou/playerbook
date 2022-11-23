import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth.guard';
import { AdminComponent } from './pages/admin/admin.component';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { FaqPageComponent } from './pages/faq-page/faq-page.component';
import { FormInscriptionComponent } from './pages/form-inscription/form-inscription.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';


const routes: Routes = [
  {path : "" , component : LandingPageComponent},
  {path : "home" , component : HomePageComponent},
  {path : "inscription" , component : FormInscriptionComponent},
  {path : "update-profile/:id" , component : FormInscriptionComponent},
  {path : "user-profile/:id" , component : UserProfileComponent, canActivate: [AuthGuard]},
  {path : "admin", component : AdminComponent, canActivate: [AuthGuard]},
  {path : "faq" , component : FaqPageComponent},
  {path : "cgu" , component : Error404PageComponent},
  {path : "contact" , component : Error404PageComponent},
  {path : "**" , component : Error404PageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
