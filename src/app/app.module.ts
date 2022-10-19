import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FormInscriptionComponent } from './pages/form-inscription/form-inscription.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchListComponent } from './component/search-list/search-list.component';
import { UserListComponent } from './component/user-list/user-list.component';
import { UserCardComponent } from './component/user-card/user-card.component';
import { SearchbarComponent } from './component/searchbar/searchbar.component';

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
    SearchbarComponent
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
