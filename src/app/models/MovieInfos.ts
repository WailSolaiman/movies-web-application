export class MovieInfos {
  movieID: number;
  mainMoviePicture: string;
  movieTitle: string;
  movieDescription: string;
  movieReleaseDate: number;
  isMovieHD: boolean;

  movieDirector: string;
  movieWriters: string [];
  movieStars: string [];
  movieStarsImages: string [];
  movieTrailer: string;
  moviePhotos: string [];

  constructor(
    mi: number,
    mmp: string,
    mt: string,
    md: string,
    mrd: number,
    imhd: boolean,
    mdi: string,
    mw: string [],
    ms: string [],
    msi: string [],
    mtr: string,
    mp: string []
  ) {
    this.movieID = mi;
    this.mainMoviePicture = mmp;
    this.movieTitle = mt;
    this.movieDescription = md;
    this.movieReleaseDate = mrd;
    this.isMovieHD = imhd;

    this.movieDirector = mdi;
    this.movieWriters = mw;
    this.movieStars = ms;
    this.movieStarsImages = msi;
    this.movieTrailer = mtr;
    this.moviePhotos = mp;
  }
}
