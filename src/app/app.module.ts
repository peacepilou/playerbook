import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FormInscriptionComponent } from './pages/form-inscription/form-inscription.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { SearchListComponent } from './components/search-list/search-list.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { LandingLogoComponent } from './components/landing-page/landing-logo/landing-logo.component';
import { LandingPathButtonComponent } from './components/landing-page/landing-path-button/landing-path-button.component';
import { SiteDescriptionComponent } from './components/landing-page/site-description/site-description.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GlobalFormComponent } from './components/form/global-form/global-form.component';
import { FirstFormComponent } from './components/form/first-form/first-form.component';
import { SecondFormComponent } from './components/form/second-form/second-form.component';
import { ThirdFormComponent } from './components/form/third-form/third-form.component';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { Error404LogoComponent } from './components/error404-logo/error404-logo.component';
import { FourthFormComponent } from './components/form/fourth-form/fourth-form.component';
import { BackButtonComponent } from './components/form/back-button/back-button.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HomePageComponent,
    FormInscriptionComponent,
    UserProfileComponent,
    NavbarComponent,
    SearchListComponent,
    UserListComponent,
    UserCardComponent,
    SearchbarComponent,
    LandingLogoComponent,
    LandingPathButtonComponent,
    SiteDescriptionComponent,
    NavbarComponent,
    GlobalFormComponent,
    FirstFormComponent,
    SecondFormComponent,
    ThirdFormComponent,
    Error404PageComponent,
    Error404LogoComponent,
    FourthFormComponent,
    BackButtonComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
