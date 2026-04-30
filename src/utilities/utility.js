const getTopThreeRating = (moviesList) => {
  const movies = [...moviesList];
  const topRatedMoviesList = [];
  for (let i = 0; i < movies.length - 1; i++) {
    let topRatedMovie = i;
    for (let j = i + 1; j < movies.length; j++) {
      if (movies[j].note > movies[topRatedMovie].note) {
        topRatedMovie = j;
      }
    }
    // swipe.
    let temp = movies[i];
    movies[i] = movies[topRatedMovie];
    movies[topRatedMovie] = temp;
    topRatedMoviesList.push(movies[topRatedMovie]);
    if (i == 2) {
      return topRatedMoviesList;
    }
  }
  //movies.filter((movie) => {movie.note == 5;});
};

const getMoviesByGenre = (movies, genre) => {
  return movies.filter((movie) => movie.genre === genre);
};

export { getTopThreeRating, getMoviesByGenre };
