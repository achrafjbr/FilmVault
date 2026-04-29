import { useState } from "react";
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
import movies from "./config/dummyMovies";
import MoviesGenres from "./Components/moviesGenre/MoviesGenres";

function App() {
  const [showModel, setShowModel] = useState(false);

  const topThreeRatedMovies = getTopThreeRating();

  const handleShowModel = () => {
    console.log("showModel", showModel);
    setShowModel(!showModel);
  };

  const [activeId, setActiveId] = useState(null);
  const [rangeValue, setRangeValue] = useState(1);
  const [selectGenre, setSelectedGenre] = useState("All genres");

  const moviesByGender = getMoviesByGenre(selectGenre);

  return (
    <div className=" relative min-h-screen ">
      <div>
        <NavBar handleShowModel={handleShowModel} />
        <Divider mb="1.5" />

        <EdgesMarginWraper mLeft={marginLeft} mRigth={marginRight}>
          <Divider mt="3" />

          <div className="grid grid-cols-4 gap-2 ">
            <PrincipleMovie {...topThreeRatedMovies[0]} />

            <div className="flex flex-col gap-2 ">
              {topThreeRatedMovies.map((movie) => (
                <TopMovie
                  key={movie.id}
                  {...movie}
                  activeId={activeId}
                  setActiveId={setActiveId}
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
                  {[...new Set(movies)].map(({ id, genre }) => (
                    <option
                      className="bg-[#02c0ff] p-1.5"
                      id={id}
                      value={genre}
                      key={id}
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
              movies={movies}
              activeId={activeId}
              setActiveId={setActiveId}
            />
          ) : (
            <MoviesGenres
              movies={moviesByGender}
              activeId={activeId}
              setActiveId={setActiveId}
            />
          )}

          <Divider mb="mb-6" />
        </EdgesMarginWraper>
      </div>
      <PopUpModelOverly showModel={showModel}>
        <PopUpModel handleShowModel={handleShowModel} />
      </PopUpModelOverly>
    </div>
  );
}

export default App;
