import { Component, OnInit, Input } from '@angular/core';
import { MovieInfos } from '../../models/MovieInfos';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  @Input()
  movieList: MovieInfos [];

  constructor() { }

  ngOnInit() { }

}
