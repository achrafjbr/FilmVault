import movies from "../config/dummyMovies";
import { MOVIES } from "./constants";

const saveAllMovies = async () => {
  try {
    await localStorage.setItem(MOVIES, JSON.stringify(movies));
    console.log(await getMovies());
  } catch (error) {
    console.error("Error saving movies:", error);
  }
};

const getMovies = () => {
  const data = localStorage.getItem(MOVIES);
  return data ? JSON.parse(data) : [];
};

const createMovie = (movie) => {
  const movies = getMovies();
  const newMovies = [...movies, movie];
  localStorage.setItem(MOVIES, JSON.stringify(newMovies));
  return getMovies();
};

const deleteMovie = (id) => {
  const movies = getMovies().filter((movie) => movie.id != id);
  return createMovie(movies);
};

const updateMovie = (movie) => {
  const movies = getMovies().filter(
    (currentMovie) => currentMovie.id != movie.id,
  );
  return createMovie(movies);
};

export { createMovie, getMovies, deleteMovie, updateMovie, saveAllMovies };
