import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MovieDetailsService } from '../../services/movie-details.service';
import { MovieInfos } from '../../models/MovieInfos';
import { FilterPipe } from '../../filter.pipe';

import {Http, Response} from '@angular/http'

@Component({
  selector: 'app-movies-home',
  templateUrl: './movies-home.component.html',
  styleUrls: ['./movies-home.component.scss']
})
export class MoviesHomeComponent implements OnInit {

  movieList: MovieInfos [];

  constructor(
    private movieDetailsService: MovieDetailsService,
    private http: Http) {}

  ngOnInit() {
    this.movieDetailsService.getAllMovies()
      .subscribe(res => this.movieList = res);
  }
}
