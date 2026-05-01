import { useEffect, useMemo, useState } from "react";
import NavBar from "./Components/NavBar";
import PopUpModelOverly from "./Components/model/PopUpModelOverly";
import PopUpModel from "./Components/model/PopUpModel";
import Divider from "./Components/dimonsions/Divider";
import EdgesMarginWraper from "./Components/dimonsions/EdgesMarginWraper";
import {
  marginLeft,
  marginRight,
} from "./Components/dimonsions/horizontalMarginWrapper";
import TopMovie from "./Components/topMovies/TopMovie";
import PrincipleMovie from "./Components/topMovies/PrincipleMovie";
import { getMoviesByGenre, getTopThreeRating } from "./utilities/utility";
import Text from "./Components/Text";
import MoviesGenres from "./Components/moviesGenre/MoviesGenres";
import { createMovie, getMovies, saveAllMovies } from "./utilities/moviesCrud";

function App() {
  //saveAllMovies();
  const [movies, setMovies] = useState([]);
  const [model, setShowModel] = useState({
    isPoped: false,
    type: "",
    movie: {},
  });
  const [activeId, setActiveId] = useState(null);
  const [rangeValue, setRangeValue] = useState(1);
  const [selectGenre, setSelectedGenre] = useState("All genres");

  useEffect(() => {
    const loadMoviesData = () => {
      const movieData = getMovies();
      setMovies(movieData);
    };
    loadMoviesData();
  }, []);

  const topThreeRatedMovies = useMemo(
    () => getTopThreeRating(movies),
    [movies],
  );

  const moviesByGender = useMemo(
    () => getMoviesByGenre(movies, selectGenre),
    [movies, selectGenre],
  );

  const handleShowModel = (type, movie) => {
    setShowModel({
      ...model,
      isPoped: !model.isPoped,
      type: type,
      movie: movie,
    });
  };

  const zIndex = model.isPoped ? "z-20" : "z-40";

  const submitMovieHandler = (e, movie) => {
    e.preventDefault();
    createMovie(movie);

    setMovies([...movies, movie]);
  };

  return (
    <div className="relative min-h-screen">
      <div>
        <NavBar handleShowModel={handleShowModel} />
        <Divider mb="1.5" />

        <EdgesMarginWraper mLeft={marginLeft} mRigth={marginRight}>
          <Divider mt="3" />

          <div className="grid grid-cols-4 gap-2 ">
            {topThreeRatedMovies && (
              <PrincipleMovie
                isPopUp={model.isPoped}
                {...topThreeRatedMovies[0]}
                handleShowModel={handleShowModel}
              />
            )}
            <div className="flex flex-col gap-2 ">
              {topThreeRatedMovies &&
                topThreeRatedMovies.map((movie) => (
                  <TopMovie
                    isPopUp={model.isPoped}
                    key={movie.id}
                    {...movie}
                    activeId={activeId}
                    setActiveId={setActiveId}
                    handleShowModel={handleShowModel}
                  />
                ))}
            </div>
          </div>
          <Divider mt="mt-6" />
          <Text text={"All Movies"} style={"font-bold"} />

          <Divider mt="mt-7" />
          <div className="bg-[#dab2ff] rounded-2xl p-1.5">
            <div className="flex p-1.5 gap-1.5 justify-center items-center">
              {/* select */}
              <div className="w-1/2 p-4">
                <Text
                  text={"Filter by Genre"}
                  style={"font-light p-2 text-white"}
                />
                <Divider mt="mt-3" />
                <select
                  value={selectGenre}
                  onChange={(e) => {
                    setSelectedGenre(e.target.value);
                  }}
                  name="genres"
                  id="genres"
                  className="w-full p-2 rounded-2xl ring-2 ring-indigo-500 cursor-pointer transition ease-in duration-200"
                >
                  <option>All genres</option>
                  {[...new Set(movies.map((m) => m.genre))].map((genre) => (
                    <option
                      className="bg-[#02c0ff] p-1.5"
                      value={genre}
                      key={genre}
                    >
                      {genre}
                    </option>
                  ))}
                </select>
              </div>

              {/* range */}
              <div className="w-1/2 p-4 ">
                <Text
                  text={`Minimum Rating : ${rangeValue}`}
                  style={"font-light p-2 text-white"}
                />
                <Divider mt="mt-3" />
                <input
                  className="w-full p-1 rounded-[50%] cursor-pointer bg-[#02c0ff]"
                  type="range"
                  min="1"
                  max="5"
                  onChange={(e) => {
                    setRangeValue(+e.target.value);
                  }}
                  value={rangeValue}
                  id="myRange"
                />
              </div>
            </div>
          </div>

          <Divider mt="mt-6" />
          {selectGenre == "All genres" && rangeValue == 1 ? (
            <MoviesGenres
              isPopUp={model.isPoped}
              handleShowModel={handleShowModel}
              movies={movies}
              activeId={activeId}
              setActiveId={setActiveId}
            />
          ) : (
            <MoviesGenres
              isPopUp={model.isPoped}
              handleShowModel={handleShowModel}
              movies={moviesByGender}
              activeId={activeId}
              setActiveId={setActiveId}
            />
          )}

          <Divider mb="mb-6" />
        </EdgesMarginWraper>
      </div>

      <PopUpModelOverly model={model}>
        <PopUpModel
          handleShowModel={handleShowModel}
          submitMovieHandler={submitMovieHandler}
          model={model}
        />
      </PopUpModelOverly>
    </div>
  );
}

export default App;
