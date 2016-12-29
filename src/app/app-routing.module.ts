import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MoviesHomeComponent } from './components/movies-home/movies-home.component';
import { MoviesHdComponent } from './components/movies-hd/movies-hd.component';
import { MoviesLatestComponent } from './components/movies-latest/movies-latest.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const appRoutes: Routes = [
  { path: '', component: MoviesHomeComponent },
  { path: 'movies-home', component: MoviesHomeComponent },
  // { path: 'movie-details/:movieID', component: MovieDetailsComponent }
  {
    path: 'movie-details',
    children: [
      {
        path: '',
        component: MoviesHomeComponent
      },
      {
        path: ':movieID',
        component: MovieDetailsComponent
      }
    ]
  },
  { path: 'movies-hd', component: MoviesHdComponent },
  { path: 'movies-latest', component: MoviesLatestComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
