import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'rxjs/Rx';

import { AngularFireModule } from 'angularfire2/index';
import { firebaseConfig } from '../environments/firebase.config';
//import { AngularFire, FirebaseListObservable } from 'angularfire2';


import { MoviesService } from './services/movies.service';
import { UsersService } from './services/users.service';


//import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { MoviesHdComponent } from './components/movies-hd/movies-hd.component';
import { MoviesLatestComponent } from './components/movies-latest/movies-latest.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieComponent } from './components/movie/movie.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { MoviesManagementComponent } from './components/admin/movies-management/movies-management.component';
import { UsersManagementComponent } from './components/admin/users-management/users-management.component';
import { NewMovieComponent } from './components/admin/movies-management/new-movie/new-movie.component';
import { UpdateMovieComponent } from './components/admin/movies-management/update-movie/update-movie.component';
import { DeleteMovieComponent } from './components/admin/movies-management/delete-movie/delete-movie.component';
import { NewUserComponent } from './components/admin/users-management/new-user/new-user.component';
import { UpdateUserComponent } from './components/admin/users-management/update-user/update-user.component';
import { RemoveUserComponent } from './components/admin/users-management/remove-user/remove-user.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    MoviesHdComponent,
    MoviesLatestComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    MoviesComponent,
    MovieComponent,
    DashboardComponent,
    MoviesManagementComponent,
    UsersManagementComponent,
    NewMovieComponent,
    UpdateMovieComponent,
    DeleteMovieComponent,
    NewUserComponent,
    UpdateUserComponent,
    RemoveUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    MoviesService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
