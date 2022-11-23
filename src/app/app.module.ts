import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { CheckboxFilterUsersComponent } from './components/checkbox-filter-users/checkbox-filter-users.component';

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
import { BackButtonComponent } from './components/form/back-button/back-button.component';

import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserBehaviorComponent } from './components/user-behavior/user-behavior.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameDetailComponent } from './components/game-detail/game-detail.component';
import { PlayerHabitComponent } from './components/player-habit/player-habit.component';


import { ScrollToTopComponent } from './utils/scroll-to-top/scroll-to-top.component';
import { FooterComponent } from './components/footer/footer.component';
import { FaqPageComponent } from './pages/faq-page/faq-page.component';
import { BackHomeButtonComponent } from './utils/back-home-button/back-home-button.component';
import { AdminComponent } from './pages/admin/admin.component';
import { StatsComponent } from './components/admin/stats/stats.component';
import { UserManagementComponent } from './components/admin/user-management/user-management.component';
import { GameManagementComponent } from './components/admin/game-management/game-management.component';
import { GameManagementButtonComponent } from './components/admin/game-management-button/game-management-button.component';
import { ConnexionFormComponent } from './components/connexion-form/connexion-form.component';
import { AuthInterceptor } from './core/auth.interceptor';


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
    CheckboxFilterUsersComponent,
    BackButtonComponent,
    UserDetailComponent,
    UserBehaviorComponent,
    GameListComponent,
    GameDetailComponent,
    PlayerHabitComponent,
    Error404PageComponent,
    Error404LogoComponent,
    ScrollToTopComponent,
    FooterComponent,
    FaqPageComponent,
    BackHomeButtonComponent,
    AdminComponent,
    StatsComponent,
    UserManagementComponent,
    GameManagementComponent,
    GameManagementButtonComponent,
    ConnexionFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
     multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
