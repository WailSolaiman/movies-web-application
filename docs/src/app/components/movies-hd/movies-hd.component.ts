import { Component, OnInit } from '@angular/core';
import { MovieInfos } from '../../models/MovieInfos';
import { MoviesService } from '../../services/movies.service';


@Component({
  selector: 'app-movies-hd',
  templateUrl: './movies-hd.component.html',
  styleUrls: ['./movies-hd.component.scss']
})
export class MoviesHdComponent implements OnInit {

  moviesHD: MovieInfos [];

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
     this.moviesService.getAllMovies()
       .subscribe(res => this.moviesHD = res);
  }

}
