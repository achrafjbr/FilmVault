import TopMovie from "../topMovies/TopMovie";

function MoviesGenres({ movies, activeId, setActiveId }) {
  return (
    <div className="grid grid-cols-3 gap-3.5">
      {movies.map((movie) => (
        <TopMovie
          key={movie.id}
          {...movie}
          activeId={activeId}
          setActiveId={setActiveId}
        />
      ))}
    </div>
  );
}

export default MoviesGenres;
