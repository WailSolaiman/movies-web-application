import { Component, OnInit, Input } from '@angular/core';
import { MovieInfos } from '../../../../models/MovieInfos';

@Component({
  selector: 'update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.scss']
})
export class UpdateMovieComponent implements OnInit {
  @Input('movies') allMovies: MovieInfos [];
  constructor() { }

  ngOnInit() {
  }

}
