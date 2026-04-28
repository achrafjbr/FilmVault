import { Film, Plus } from "lucide-react";
import Button from "./Button";
import Text from "./Text";
function NavBar({ handleShowModel }) {
  return (
    <div className="flex justify-between bg-purple-300 shadow-2xl py-3">
      <Film size={50} color="white" />
      <Button
        onClick={handleShowModel}
        style="cursor-pointer m-2 shadow bg-purple-400 flex p-2 justify-center items-center rounded-md"
      >
        <Plus color="white" />
        <Text text="Add Movie" style={"text-white"} />
      </Button>
    </div>
  );
}

export default NavBar;
