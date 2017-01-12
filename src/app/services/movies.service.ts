import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MovieInfos } from '../models/MovieInfos';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';


@Injectable()
export class MoviesService {

  constructor(private af: AngularFire) { }

  getAllMovies(): Observable <MovieInfos []> {
    return this.af.database.list('movies').map(MovieInfos.fromJsonList);
  }

  getSpecificMovie(key: string) : Observable <MovieInfos> {
    return this.af.database.object('movies/' + key).map(MovieInfos.fromJson);
  }

  addNewMovie(newMovie: MovieInfos): string {
    return this.af.database.list('/movies').push({
      mainMoviePicture: newMovie.mainMoviePicture,
      movieTitle: newMovie.movieTitle,
      movieDescription: newMovie.movieDescription,
      movieReleaseDate: newMovie.movieReleaseDate,
      isMovieHD: newMovie.isMovieHD,
      movieGenre: newMovie.movieGenre,
      movieDirector: newMovie.movieDirector,
      movieWriters: newMovie.movieWriters,
      movieStars: newMovie.movieStars,
      movieStarsImages: newMovie.movieStarsImages,
      movieTrailer: newMovie.movieTrailer,
      moviePhotos: newMovie.moviePhotos
    }).key.toString();
  }

  updateMovie(updatedMovieKey: string, updatedMovie: MovieInfos) {
    this.af.database.object('movies/' + updatedMovieKey).update({
      mainMoviePicture: updatedMovie.mainMoviePicture,
      movieTitle: updatedMovie.movieTitle,
      movieDescription: updatedMovie.movieDescription,
      movieReleaseDate: updatedMovie.movieReleaseDate,
      isMovieHD: updatedMovie.isMovieHD,
      movieGenre: updatedMovie.movieGenre,
      movieDirector: updatedMovie.movieDirector,
      movieWriters: updatedMovie.movieWriters,
      movieStars: updatedMovie.movieStars,
      movieStarsImages: updatedMovie.movieStarsImages,
      movieTrailer: updatedMovie.movieTrailer,
      moviePhotos: updatedMovie.moviePhotos
    });
  }

  deleteMovie(deletedMovieKey: string) {
    this.af.database.object('movies/' + deletedMovieKey).remove();
  }

}
