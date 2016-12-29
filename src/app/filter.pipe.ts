import { Pipe, PipeTransform } from '@angular/core';

import { MovieInfos } from './models/MovieInfos';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allMovies: any, term: string): any {
    if (term === undefined) return allMovies;

    return allMovies.filter((movie: MovieInfos) => {
      return movie.movieTitle.toLowerCase().includes(term.toLowerCase());
    });
  }

}
