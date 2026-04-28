import { useState } from "react";
import NavBar from "./Components/NavBar";
import PopUpModelOverly from "./Components/model/PopUpModelOverly";
import PopUpModel from "./Components/model/PopUpModel";

function App() {
  const [showModel, setShowModel] = useState(false);

  const handleShowModel = () => {
    console.log("showModel", showModel);
    setShowModel(!showModel);
  };
  return (
    <div>
      <div>
        <NavBar handleShowModel={handleShowModel} />
      </div>
      <PopUpModelOverly showModel={showModel}>
        <PopUpModel handleShowModel={handleShowModel} />
      </PopUpModelOverly>
    </div>
  );
}

export default App;
