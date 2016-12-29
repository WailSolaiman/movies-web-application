import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MovieDetailsService } from './services/movie-details.service';

import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MoviesHomeComponent } from './components/movies-home/movies-home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { MoviesHdComponent } from './components/movies-hd/movies-hd.component';
import { FilterPipe } from './filter.pipe';
import { MoviesLatestComponent } from './components/movies-latest/movies-latest.component';
import { SaveLinkPipe } from './save-link.pipe';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieDetailsComponent,
    MoviesHomeComponent,
    NavigationComponent,
    FooterComponent,
    MoviesHdComponent,
    FilterPipe,
    MoviesLatestComponent,
    SaveLinkPipe,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [MovieDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
