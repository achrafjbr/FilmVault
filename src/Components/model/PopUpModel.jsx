import { CircleX } from "lucide-react";

function PopUpModel({ handleShowModel }) {
  return (
    <div className="absolute bg-purple-300 w-[60%] h-[70%] rounded-2xl shadow-2xl overflow-auto p-2 ">
      Show data of PopUpModel HERE
      <div
        onClick={handleShowModel}
        className="absolute right-0 top-0 p-1 cursor-pointer"
      >
        <CircleX size={30} color="#ffffff" />
      </div>
    </div>
  );
}

export default PopUpModel;
