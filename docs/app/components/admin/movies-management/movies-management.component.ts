import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../../services/movies.service';
import { MovieInfos } from '../../../models/MovieInfos';

@Component({
  selector: 'movies-management',
  templateUrl: './movies-management.component.html',
  styleUrls: ['./movies-management.component.scss']
})
export class MoviesManagementComponent implements OnInit {
  allMovies: MovieInfos [];
  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.moviesService.getAllMovies()
      .subscribe(movies => this.allMovies = movies);
  }

  deleteMovieFormDB(movie: MovieInfos) {
    this.moviesService.deleteMovie(movie.$key);
    console.log('Movie Deleted : ' + movie.movieTitle);
  }

}
