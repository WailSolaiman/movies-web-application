import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MoviesService } from '../../../../services/movies.service';
import { MovieInfos } from '../../../../models/MovieInfos';

@Component({
  selector: 'new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.scss']
})
export class NewMovieComponent implements OnInit {

  public form: FormGroup;
  private writersArray: string [] = [];
  private starsArray: string [] = [];
  private starImagesArray: string [] = [];
  private starImagesHelper: string [] = [];
  private movieImagesArray: string [] = [];
  private isMovieHD: boolean = true;

  private onlyNumbers = "[0-9]+";



  constructor(
    private formBuilder: FormBuilder,
    private moviesService: MoviesService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: ["",[Validators.required, Validators.minLength(3)]],
      year: ["",[
        Validators.required,
        Validators.pattern(this.onlyNumbers),
        Validators.minLength(4)]],
      director: ["",[Validators.required, Validators.minLength(3)]],
      writers: ["",[Validators.required]],
      poster: ["",[Validators.required]],
      description: ["",[Validators.required, Validators.minLength(20)]],
      stars: ["",[Validators.required, Validators.minLength(3)]],
      starsImages: ["",[Validators.required]],
      movieImages: ["",[Validators.required]],
      trailer: ["",[Validators.required]]
    });
  }

  private saveWritersToArray(writer: string) {
    console.log(writer.toString());
    console.log(this.form);
    this.writersArray.push(writer);
  }

  private saveStarsToArray(star: string) {
    this.starsArray.push(star);
  }

  private saveStarsImagesToArray(starImage: string) {
    this.starImagesArray.push(starImage);

    let shortImageLinkName = starImage.substr(49, 46);
    this.starImagesHelper.push(shortImageLinkName);
  }

  private saveMovieImagesToArray(MoviePhoto: string) {
    this.movieImagesArray.push(MoviePhoto);
  }

  onSubmit(form) {
    let movieTitle: string = form.value.title;
    let movieDirector: string = form.value.director;
    let movieWriters: string [] = this.writersArray;
    let mainMoviePicture: string = form.value.poster;
    let movieDescription: string = form.value.description;
    let movieStars: string [] = this.starsArray;
    let movieStarsImages: string [] = this.starImagesArray;
    let moviePhotos: string [] = this.movieImagesArray;
    let movieTrailer: string = form.value.trailer;
    let movieReleaseDate: number = Number(form.value.year);
    let isMovieHD: boolean = this.isMovieHD;
    let movieGenre: string = "Thriller";

    let newMovie = <MovieInfos> {
      mainMoviePicture: mainMoviePicture,
      movieTitle: movieTitle,
      movieDescription: movieDescription,
      movieReleaseDate: movieReleaseDate,
      isMovieHD: isMovieHD,
      movieGenre: movieGenre,
      movieDirector: movieDirector,
      movieWriters: movieWriters,
      movieStars: movieStars,
      movieStarsImages: movieStarsImages,
      movieTrailer: movieTrailer,
      moviePhotos: moviePhotos
    }

    this.moviesService.addNewMovie(newMovie);
  }

}
