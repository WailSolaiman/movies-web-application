import { Component, OnInit } from '@angular/core';

import { MovieInfos } from '../../models/MovieInfos';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies-latest',
  templateUrl: './movies-latest.component.html',
  styleUrls: ['./movies-latest.component.scss']
})
export class MoviesLatestComponent implements OnInit {

  private latestMovies: MovieInfos[];

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.moviesService.getAllMovies()
      .subscribe(res => this.latestMovies = res);
  }

}
