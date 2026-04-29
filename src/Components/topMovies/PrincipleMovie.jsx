import { Divide, Star } from "lucide-react";
import Overlay from "./Overlay";
import Text from "../Text";
import Divider from "../dimonsions/Divider";
import { useEffect, useState } from "react";

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
}) {
  const [showTrailer, setShowTrailer] = useState(false);
  const watchTrailerHandler = (isPlay) => {
    setShowTrailer(isPlay);
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
        <Divider mr="mt-2" />
        <Text text={titre} style={"text-white font-semibold"} />
        <Divider mr="mt-2" />

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
        <Divider mr="mt-2" />

        <Text text={description} style={"text-white font-light w-[70%]"} />
      </div>
    </div>
  );
}

export default PrincipleMovie;
