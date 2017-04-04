import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MovieInfos } from '../../../../models/MovieInfos';

@Component({
  selector: 'delete-movie',
  templateUrl: './delete-movie.component.html',
  styleUrls: ['./delete-movie.component.scss']
})
export class DeleteMovieComponent implements OnInit {

  @Input('movies') allMovies: MovieInfos [];
  @Output() deletedMovie = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  deleteSelectedMovie(movie: MovieInfos) {
    this.deletedMovie.emit(movie);
  }

}
