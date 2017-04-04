import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { MovieInfos } from '../../models/MovieInfos';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movieList: MovieInfos [];
  filtered: MovieInfos [];

  constructor(
    private moviesService: MoviesService) {}

  ngOnInit() {
    this.moviesService.getAllMovies()
      .do(console.log)
      .subscribe(res => this.movieList = this.filtered = res);
  }

  search(search: string) {
    this.filtered = this.movieList.filter(movie => movie.movieTitle.includes(search));
  }

  loadMoviesGenre(movieGenre: string) {
    this.filtered = this.movieList.filter(movie => movie.movieGenre === movieGenre);
  }
}
