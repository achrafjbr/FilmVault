import { Divide, Plus, ScanEye, Star } from "lucide-react";
import Overlay from "./Overlay";
import Text from "../Text";
import Divider from "../dimonsions/Divider";
import { useEffect, useState } from "react";
import Button from "../Button";
import { ModelType } from "../../utilities/modelPopUpModel";

function PrincipleMovie({
  titre,
  description,
  annee_de_sortie,
  genre,
  realisateur,
  acteurs_principaux,
  image,
  trailer,
  note,
  handleShowModel,
}) {
  const [showTrailer, setShowTrailer] = useState(false);

  const watchTrailerHandler = (isPlay) => {
    setShowTrailer(isPlay);
  };

  const { details, setDetails } = useState(false);

  const handleSeeDetails = () => {
    setDetails(!details);
  };

  return (
    <div
      className="col-span-3 cursor-pointer relative overflow-hidden transition duration-300 ease-in-out"
      onMouseEnter={() => watchTrailerHandler(true)}
      onMouseLeave={() => watchTrailerHandler(false)}
    >
      {!showTrailer ? (
        <img
          className="w-full h-full object-cover rounded-2xl absolute z-0 "
          src={image}
          alt="Image"
        />
      ) : (
        <iframe
          className="w-full h-full absolute z-30 rounded-2xl"
          src={trailer.replace("watch?v=", "embed/")}
          allow="autoplay"
          title={titre}
        />
      )}
      <Overlay />
      <div className="absolute inset-0 z-20 flex flex-col items-start justify-end p-2 ml-8 ">
        <div className="flex gap-1">
          {[...Array(note)].map((_, index) => {
            return <Star key={index} color="#f5c518" fill="#f5c518" />;
          })}
          <Divider mr="mr-2" />
          <Text text={"Top Rated Movie"} style={" text-[#f5c518] font-bold "} />
        </div>
        <Divider mt="mt-2" />
        <Text text={titre} style={"text-white font-semibold"} />
        <Divider mt="mt-2" />
        <div className="flex">
          <Text text={annee_de_sortie} style={"text-white  font-semibold"} />
          <Divider mr="mr-2.5" />
          <Text text={genre} style={"text-white font-semibold"} />
          <Divider mr="mr-2.5" />
          <Text
            text={`${note == 5 ? "5/5" : note == 4 ? "4/5" : note == 3 ? "3/5" : note == 2 ? "2/5" : note == 1 ? "1/5" : ""}`}
            style={"text-white font-semibold"}
          />
        </div>
        <Divider mt="mt-2" />
        <Text text={description} style={"text-white font-light w-[70%]"} />
        <Divider mb="mb-19" />
      </div>

      <div className="absolute z-30 p-6 bottom-0.5 left-2.5">
        <Button
          onClick={() => {
            handleShowModel(ModelType.ALL);
          }}
          style="cursor-pointer shadow bg-purple-400 flex p-2 justify-center items-center rounded-md"
        >
          <ScanEye color="white" />
          <Text text="Watch Details" style={"text-white"} />
        </Button>
      </div>
    </div>
  );
}

export default PrincipleMovie;
