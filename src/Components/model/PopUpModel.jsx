import { CircleX, DiamondPlus } from "lucide-react";
import EdgesMarginWraper from "../dimonsions/EdgesMarginWraper";
import Divider from "../dimonsions/Divider";
import Text from "../Text";
import { useEffect, useState } from "react";
import InputField from "../movies/inputField";
import Button from "../Button";
import SpinnerBaseColorPinkFourth from "../SpinnerBaseColorPinkFourth";
import { ModelType } from "../../utilities/modelPopUpModel";

function PopUpModel({ handleShowModel, submitMovieHandler, type }) {
  const [movie, setMovie] = useState({
    titre: "",
    description: "",
    annee_de_sortie: 0,
    genre: "",
    realisateur: "",
    acteurs_principaux: [],
    image: "",
    trailer: "",
    note: 1,
  });
  const [saveMovie, setSaveMovie] = useState(false);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setSaveMovie(false);
    }, 6000);
    () => {
      clearTimeout(timeOut);
    };
  }, [saveMovie]);

  const handleMovieAddition = (e) => {
    const key = e.target.name;
    let value = e.target.value;
    if (key === "acteurs_principaux") {
      value = value.split(",").map((val) => val.trim());
    }
    setMovie({
      ...movie,
      [key]: value,
    });
  };

  return (
    <div
      className={`${saveMovie == true ? "flex justify-center items-center fixed z-40 bg-purple-300 w-[60%] h-[80%] top-10 rounded-2xl shadow-2xl overflow-auto p-2" : "fixed z-40 bg-purple-300 w-[60%] h-[80%] top-10 rounded-2xl shadow-2xl overflow-auto p-2"}`}
    >
      <Divider mt="mt-4" />

      {type === ModelType.ADD ? (
        <div>
          {saveMovie ? (
            <div>
              <SpinnerBaseColorPinkFourth />
              <h3>Loading...</h3>
            </div>
          ) : (
            <EdgesMarginWraper mLeft={"ml-3"} mRigth={"ml-3"}>
              <Text text={"Add Movie"} style={"font-bold"} />
              <Divider mt="mt-6" />
              {/* title */}
              <InputField
                type={"text"}
                title={"title"}
                style={"p-4 border border-white outline-none  rounded  "}
                value={movie.title}
                onChange={(e) => handleMovieAddition(e)}
              />

              {/* description */}
              <InputField
                type={"text"}
                title={"description"}
                style={"p-4 border border-white outline-none  rounded  "}
                value={movie.description}
                onChange={(e) => handleMovieAddition(e)}
              />

              {/* annee_de_sortie */}
              <InputField
                type={"number"}
                title={"annee_de_sortie"}
                style={"p-4 border border-white outline-none  rounded  "}
                value={movie.annee_de_sortie}
                onChange={(e) => handleMovieAddition(e)}
              />

              {/* genre */}
              <InputField
                type={"text"}
                title={"genre"}
                style={"p-4 border border-white outline-none  rounded  "}
                value={movie.genre}
                onChange={(e) => handleMovieAddition(e)}
              />

              {/* realisateur */}
              <InputField
                type={"text"}
                title={"realisateur"}
                style={"p-4 border border-white outline-none  rounded  "}
                value={movie.realisateur}
                onChange={(e) => handleMovieAddition(e)}
              />

              {/* acteurs_principaux */}
              <InputField
                type={"text"}
                title={"acteurs_principaux"}
                style={"p-4 border border-white outline-none  rounded  "}
                value={movie.acteurs_principaux}
                onChange={(e) => handleMovieAddition(e)}
              />

              {/* image */}
              <InputField
                type={"text"}
                title={"image"}
                style={"p-4 border border-white outline-none  rounded  "}
                value={movie.image}
                onChange={(e) => handleMovieAddition(e)}
              />
              {/* trailer */}
              <InputField
                type={"text"}
                title={"trailer"}
                style={"p-4 border border-white outline-none  rounded  "}
                value={movie.trailer}
                onChange={(e) => handleMovieAddition(e)}
              />

              {/* note */}
              <InputField
                type={"range"}
                title={"note"}
                style={"p-4 border border-white outline-none  rounded  "}
                value={movie.note}
                onChange={(e) => handleMovieAddition(e)}
              />
              <div className="flex justify-around ">
                <Button
                  onClick={(e) => {
                    submitMovieHandler(e, movie);
                    setSaveMovie(true);
                  }}
                  style={
                    "flex gap-2 justify-center items-center bg-[#c27aff] py-2 px-4 rounded cursor-pointer"
                  }
                >
                  <DiamondPlus />
                  <Text text="Add Movie" style={"text-white"} />
                </Button>

                {/* // cancal btn */}
                <Button
                  onClick={() => {
                    handleShowModel("");
                  }}
                  style={
                    "flex justify-center items-center bg-[#c27aff] py-2 px-4 rounded cursor-pointer"
                  }
                >
                  <Text text="Cancel" style={"text-white"} />
                </Button>
              </div>
            </EdgesMarginWraper>
          )}

          {saveMovie ? (
            <></>
          ) : (
            <div
              onClick={() => {
                handleShowModel("");
              }}
              className="absolute right-0 top-0 p-1 cursor-pointer"
            >
              <CircleX size={30} color="#ffffff" />
            </div>
          )}
        </div>
      ) : type === ModelType.UPDATE ? (
        <div>Modification</div>
      ) : type === ModelType.ALL ? (
        <div>ALL</div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default PopUpModel;
