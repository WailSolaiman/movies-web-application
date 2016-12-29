import { Component, OnInit } from '@angular/core';
import { MovieInfos } from '../../models/MovieInfos';
import { MovieDetailsService } from '../../services/movie-details.service';


@Component({
  selector: 'app-movies-hd',
  templateUrl: './movies-hd.component.html',
  styleUrls: ['./movies-hd.component.scss']
})
export class MoviesHdComponent implements OnInit {

  moviesHD: MovieInfos [];

  constructor(private movieDetailsService: MovieDetailsService) { }

  ngOnInit() {
    this.movieDetailsService.getAllMovies()
      .subscribe(res => this.moviesHD = res);
  }

}
