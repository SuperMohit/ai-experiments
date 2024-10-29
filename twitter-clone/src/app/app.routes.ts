import { Routes } from '@angular/router';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Import components
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { FeedComponent } from './feed/feed/feed.component';
import { ProfileComponent } from './profile/profile/profile.component';

export const routes: Routes = [
  { path: '', redirectTo: '/feed', pathMatch: 'full' },
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/register', component: RegisterComponent },
  { path: 'feed', component: FeedComponent },
  { path: 'profile', component: ProfileComponent },
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes, withComponentInputBinding()),
  importProvidersFrom(HttpClientModule)
];