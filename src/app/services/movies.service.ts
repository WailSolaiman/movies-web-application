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

}
