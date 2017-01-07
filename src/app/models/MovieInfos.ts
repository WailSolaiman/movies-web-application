export class MovieInfos {

  constructor(
    public $key: string,
    public movieID: number,
    public mainMoviePicture: string,
    public movieTitle: string,
    public movieDescription: string,
    public movieReleaseDate: number,
    public isMovieHD: boolean,
    public movieDirector: string,
    public movieWriters: string[],
    public movieStars: string[],
    public movieStarsImages: string[],
    public movieTrailer: string,
    public moviePhotos: string[]
  ) { }

  static fromJsonList(array): MovieInfos[] {
    return array.map(MovieInfos.fromJson);
  }

  static fromJson({$key, movieID, mainMoviePicture,
    movieTitle, movieDescription, movieReleaseDate, isMovieHD,
    movieDirector, movieWriters, movieStars, movieStarsImages,
    movieTrailer, moviePhotos}): MovieInfos {

    return new MovieInfos($key, movieID, mainMoviePicture,
      movieTitle, movieDescription, movieReleaseDate, isMovieHD,
      movieDirector, movieWriters, movieStars, movieStarsImages,
      movieTrailer, moviePhotos);
  }
}
