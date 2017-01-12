import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';

import { MoviesHdComponent } from './components/movies-hd/movies-hd.component';
import { MoviesLatestComponent } from './components/movies-latest/movies-latest.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { MovieComponent } from './components/movie/movie.component';
import { MoviesComponent } from './components/movies/movies.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { MoviesManagementComponent } from './components/admin/movies-management/movies-management.component';
import { UsersManagementComponent } from './components/admin/users-management/users-management.component';



const indexRoute: Route = {
  path: '',
  component: HomeComponent
};

const fallbackRoute: Route = {
  path:'**',
  component: HomeComponent
};

const appRoutes: Routes = [
  indexRoute,
  { path: 'home', component: HomeComponent },

  { path: 'movies',
   children: [
     {
       path: '',
       component: MoviesComponent
     }
   ]
  },

  {
    path: 'movie',
    children:
    [
      {
        path: '',
        component: MovieComponent
      },
      {
        path: ':$key',
        component: MovieComponent
      }
    ]
  },
  { path: 'movies-hd', component: MoviesHdComponent },
  { path: 'movies-latest', component: MoviesLatestComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children:
    [
      {
        path: 'movies-management',
        component: MoviesManagementComponent,
        outlet: 'movies-management-outlet'
      },
      {
        path: 'users-management',
        component: UsersManagementComponent,
        outlet: 'users-management-outlet'
      }
    ]
  },
  fallbackRoute
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
