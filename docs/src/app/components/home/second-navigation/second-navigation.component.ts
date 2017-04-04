import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MovieInfos } from '../../../models/MovieInfos';

@Component({
  selector: 'second-navigation',
  templateUrl: './second-navigation.component.html',
  styleUrls: ['./second-navigation.component.scss']
})
export class SecondNavigationComponent implements OnInit {

  @Input() allMovies: MovieInfos [];
  @Output() filteredMovies = new EventEmitter();
  private isSelected: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  selectMovieGenre(movieGenre: string) {
    this.isSelected = true;
    this.filteredMovies.emit(movieGenre);
  }
}
