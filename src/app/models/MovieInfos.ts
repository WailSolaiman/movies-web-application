export class MovieInfos {

  constructor(
    public $key: string,
    public mainMoviePicture: string,
    public movieTitle: string,
    public movieDescription: string,
    public movieReleaseDate: number,
    public isMovieHD: boolean,
    public movieGenre: string,
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

  static fromJson({$key, mainMoviePicture,
    movieTitle, movieDescription, movieReleaseDate, isMovieHD,
    movieGenre, movieDirector, movieWriters, movieStars, movieStarsImages,
    movieTrailer, moviePhotos}): MovieInfos {

    return new MovieInfos($key, mainMoviePicture,
      movieTitle, movieDescription, movieReleaseDate, isMovieHD,
      movieGenre, movieDirector, movieWriters, movieStars, movieStarsImages,
      movieTrailer, moviePhotos);
  }
}
