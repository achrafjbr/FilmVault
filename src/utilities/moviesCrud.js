import { MOVIES } from "./constants";

const saveAllMovies = (movies) => {
  try {
    localStorage.setItem(MOVIES, JSON.stringify(movies));
  } catch (error) {
    console.error("Error saving movies:", error);
  }
};
const getMovies = async () =>
  (await JSON.parse(localStorage.getItem(MOVIES))) || [];

const createMovie = async (movie) => {
  const movies = getMovies();
  const newMovies = [...movies, movie];
  await localStorage.setItem(MOVIES, JSON.stringify(newMovies));
  return getMovies();
};

const deleteMovie = async (id) => {
  const movies = getMovies().filter((movie) => movie.id != id);
  return await createMovie(movies);
};

const updateMovie = async (movie) => {
  const movies = getMovies().filter(
    (currentMovie) => currentMovie.id != movie.id,
  );
  return await createMovie(movies);
};

export { createMovie, getMovies, deleteMovie, updateMovie, saveAllMovies };
