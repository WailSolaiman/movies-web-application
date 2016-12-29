import { Injectable } from '@angular/core';
import { MovieInfos } from '../models/MovieInfos';

import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MovieDetailsService {

  private allMovies: MovieInfos [] = [];

  constructor(private http: Http) { }

  // getMoviesHD(): Observable <MovieInfos []> {
  //   let movies$ = this.http
  //   .get('public/movies.json', {headers: this.getHeaders()})
  //   .map(mapMovies)
  //   .filter((movies, index) => movies[index].isMovieHD.valueOf() === true)
  //   .do(movies => console.log(movies));
  //   return movies$;
  // }

  getAllMovies(): Observable <MovieInfos []> {
    let movies$ = this.http
      .get('public/movies.json', {headers: this.getHeaders()})
      .map(mapMovies);
      return movies$;
  }

  getSpecificMovie(id: number): Observable <MovieInfos> {
    let movie$ = this.http
    .get('public/movies.json', {headers: this.getHeaders()})
    .flatMap(mapMovies)
    .filter(movie => movie.movieID === id)
    return movie$;
  }

  private getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
} // End Class -----------------------------------------------------

function mapMovies(res: Response): MovieInfos [] {
  return res.json().map(toMovie);
}

function toMovie(r:any): MovieInfos {
  // let movieInfos = <MovieInfos>({
  //   movieID: r.movieID,
  //   mainMoviePicture: r.mainMoviePicture,
  //   movieTitle: r.movieTitle,
  //   movieDescription: r.movieDescription,
  //   movieReleaseDate: r.movieReleaseDate,
  //   isMovieHD: r.isMovieHD
  // })
  //return movieInfos;
  return new MovieInfos(r.movieID, r.mainMoviePicture, r.movieTitle,
    r.movieDescription, r.movieReleaseDate, r.isMovieHD, r.movieDirector,
    r.movieWriters, r.movieStars, r.movieStarsImages, r.movieTrailer,
    r.moviePhotos);
}
