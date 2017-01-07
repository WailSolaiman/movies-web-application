import { initializeApp, database } from 'firebase';
import { firebaseConfig } from '../environments/firebase.config';
import { dbData } from './db-data';

console.log('Initializing Firebase database ...');

initializeApp(firebaseConfig);

const moviesRef = database().ref('movies');
const usersRef = database().ref('users');

dbData.movies.forEach(movie => {

  console.log('adding movie: ', movie.movieTitle);

  const movieRef = moviesRef.push({
    movieID: movie.movieID,
    mainMoviePicture: movie.mainMoviePicture,
    movieTitle: movie.movieTitle,
    movieDescription: movie.movieDescription,
    movieReleaseDate: movie.movieReleaseDate,
    isMovieHD: movie.isMovieHD,
    movieDirector: movie.movieDirector,
    movieWriters: movie.movieWriters,
    movieStars: movie.movieStars,
    movieStarsImages: movie.movieStarsImages,
    movieTrailer: movie.movieTrailer,
    moviePhotos: movie.moviePhotos
  });
});

dbData.users.forEach(user => {

  console.log('adding movie: ', user.email);

  const userRef = usersRef.push({
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      password: user.password,
      admin: user.admin
  });
});
