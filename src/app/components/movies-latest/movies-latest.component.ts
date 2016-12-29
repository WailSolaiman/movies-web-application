import { Component, OnInit } from '@angular/core';

import { MovieInfos } from '../../models/MovieInfos';
import { MovieDetailsService } from '../../services/movie-details.service';

@Component({
  selector: 'app-movies-latest',
  templateUrl: './movies-latest.component.html',
  styleUrls: ['./movies-latest.component.scss']
})
export class MoviesLatestComponent implements OnInit {

  private latestMovies: MovieInfos[];

  constructor(private movieDetailsService: MovieDetailsService) { }

  ngOnInit() {
    this.movieDetailsService.getAllMovies()
      .subscribe(res => this.latestMovies = res);
  }

}
