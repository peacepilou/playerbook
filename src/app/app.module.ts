import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FormInscriptionComponent } from './pages/form-inscription/form-inscription.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';

import { NavbarComponent } from './components/navbar/navbar.component';


import { SearchListComponent } from './components/search-list/search-list.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';

import { LandingLogoComponent } from './components/landing-page/landing-logo/landing-logo.component';
import { LandingPathButtonComponent } from './components/landing-page/landing-path-button/landing-path-button.component';
import { SiteDescriptionComponent } from './components/landing-page/site-description/site-description.component';


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
    SiteDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
