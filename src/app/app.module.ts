import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FormInscriptionComponent } from './pages/form-inscription/form-inscription.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { LandingLogoComponent } from './components/landing-page/landing-logo/landing-logo.component';
import { LandingPathButtonComponent } from './components/landing-page/landing-path-button/landing-path-button.component';
import { SiteDescriptionComponent } from './components/landing-page/site-description/site-description.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserBehaviorComponent } from './components/user-behavior/user-behavior.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameDetailComponent } from './components/game-detail/game-detail.component';
import { PlayerHabitComponent } from './components/player-habit/player-habit.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HomePageComponent,
    FormInscriptionComponent,
    UserProfileComponent,
    LandingLogoComponent,
    LandingPathButtonComponent,
    SiteDescriptionComponent,
    NavbarComponent,
    UserDetailComponent,
    UserBehaviorComponent,
    GameListComponent,
    GameDetailComponent,
    PlayerHabitComponent
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
