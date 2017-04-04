import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

import { MovieInfos } from '../../models/MovieInfos';

import { MoviesService } from '../../services/movies.service';
import { SaveLinkPipe } from '../../save-link.pipe';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import {Http, Response} from '@angular/http'

@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit, OnDestroy {

  private specificMovie: MovieInfos;
  private filteredGenre: MovieInfos[];
  private paramsSub$: Subscription;
  private movies$: Subscription;
  private videoUrl: SafeResourceUrl;
  private isCliked: boolean = false;
  private isLogedin: boolean = false;
  private isActive: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private moviesService: MoviesService,
    private sanitizer: DomSanitizer) { };


  ngOnInit() {
    this.paramsSub$ = this.route.params.subscribe(params => {
      let key = params['$key'];
      console.log("KEY : " + key);
      this.moviesService.getSpecificMovie(key)
        .do(console.log)
        .subscribe(val => {
          this.specificMovie = val;
          document.body.scrollTop = 0;
        });
    });
    let movies$: Subscription = this.moviesService.getAllMovies()
      .map(allMovies => allMovies.filter(
        movie =>
          (movie.movieGenre === this.specificMovie.movieGenre) &&
          (movie.movieTitle !== this.specificMovie.movieTitle)))
      .subscribe(all => {
          this.filteredGenre = all;
          document.body.scrollTop = 0;
      });
  }

  private updateVideoUrl(url: string) {
    let dangerousVideoUrl = url;
    this.isCliked = this.toggle(this.isCliked);
    this.videoUrl =
      this.sanitizer.bypassSecurityTrustResourceUrl(dangerousVideoUrl);
  }

  private checkFirstDivElement(i: number): boolean {
    if (i === 0) {
      this.isActive = true;
    }
    else this.isActive = false;

    return this.isActive;
  }

  private toggle(value: boolean): boolean {
    return value = !value;
  }

  goHomePage() {
    this.router.navigateByUrl('');
  }

  ngOnDestroy() {
    this.paramsSub$.unsubscribe();
    //this.movies$.unsubscribe();
  }


}
