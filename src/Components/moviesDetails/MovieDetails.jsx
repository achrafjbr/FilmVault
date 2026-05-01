import { SquarePen, Star, Trash } from "lucide-react";
import Button from "../Button";
import { deleteMovie } from "../../utilities/moviesCrud";
import Divider from "../dimonsions/Divider";
import Text from "../Text";

function MovieDetails({model}) {
  return (
    <div>
      <div>
        <img
          className="w-full h-100 object-cover rounded"
          src={model.movie.image}
          alt="Image"
        />

        <Divider mt="mt-5" />

        <Text text={model.movie.titre} style={"font-bold  text-white"} />

        <Divider mt="mt-3" />
        <div className="flex gap-1.5">
          <Text
            text={model.movie.annee_de_sortie}
            style={"font-bold text-white"}
          />
          <Text text={model.movie.genre} style={"font-bold text-white"} />
        </div>

        <Divider mt="mt-3" />

        <div className="flex gap-1.5">
          <Text
            text={"Rating"}
            style={"font-light font-extrabold text-white"}
          />
          {[...Array(model.movie.note)].map((_, index) => {
            return <Star key={index} color="#f5c518" fill="#f5c518" />;
          })}
        </div>

        <Divider mt="mt-3" />
        <Text text={"Synopsis"} style={"font-light text-white"} />
        <Text text={model.movie.description} style={"font-bold text-white"} />

        <Divider mt="mt-3" />
        <Text text={"Director"} style={"font-light text-white"} />
        <Text text={model.movie.realisateur} style={"font-bold text-white"} />

        <Divider mt="mt-3" />
        <Text text={"Cast"} style={"font-light text-white"} />
        <div className="flex gap-1">
          {model.movie.acteurs_principaux.map((actor, index) => (
            <Text
              key={index}
              text={actor.concat(", ")}
              style={"font-bold text-white"}
            />
          ))}
        </div>
      </div>
      <Divider mt="mt-6" />
      <div className="flex justify-around ">
        <Button
          onClick={(e) => {
            //   submitMovieHandler(e, movie);
            //  setSaveMovie(true);
            console.log("Movie id", model.movie.id);
          }}
          style={
            "flex gap-2 justify-center items-center bg-[#c27aff] py-2 px-4 rounded cursor-pointer"
          }
        >
          <SquarePen color="white" />
          <Text text="Edit" style={"text-white"} />
        </Button>

        {/* // delete btn */}
        <Button
          onClick={() => {
            deleteMovie(model.movie.id);
          }}
          style={
            "flex gap-2 justify-center items-center bg-red-600 py-2 px-4 rounded cursor-pointer"
          }
        >
          <Trash color="white" />
          <Text text="Cancel" style={"text-white "} />
        </Button>
      </div>
      <Divider mt="mt-5" />
    </div>
  );
}

export default MovieDetails;
