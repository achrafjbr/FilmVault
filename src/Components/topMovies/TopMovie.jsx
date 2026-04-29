import { Star } from "lucide-react";
import Text from "../Text";
import Overlay from "./Overlay";

function TopMovie({
  id,
  titre,
  description,
  annee_de_sortie,
  genre,
  realisateur,
  acteurs_principaux,
  image,
  trailer,
  note,
  activeId,
  setActiveId,
}) {
  return (
    <>
      <div
        className="cursor-pointer relative h-48 overflow-hidden"
        onMouseEnter={() => setActiveId(id)}
        onMouseLeave={() => setActiveId(null)}
      >
        {id === activeId ? (
          <iframe
            className="w-full absolute h-full inset-0 z-50 rounded-2xl"
            src={trailer.replace("watch?v=", "embed/")}
            allow="autoplay"
            title={titre}
          />
        ) : (
          <img
            className={`object-cover w-full h-48  rounded-2xl`}
            src={image}
            alt="image"
          />
        )}
        <Overlay />
        <div className="absolute inset-0 z-20 flex flex-col items-start justify-end p-2">
          <Text text={titre} style={"text-white font-semibold"} />
          <Text text={genre} style={"text-white font-light"} />
          <div className="flex gap-1">
            {[...Array(note)].map((_, index) => {
              return (
                <Star key={index} color="#f5c518" fill="#f5c518" size={16} />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default TopMovie;
