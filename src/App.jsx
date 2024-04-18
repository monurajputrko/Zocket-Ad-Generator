import { useState } from "react";
import "./App.css";
import ImageComponent from "./components/ImageComponent";
import ModifyComponent from "./components/ModifyComponent";
import Home from "./components/Home";

function App() {
  const [Boolean,setBoolean] = useState(false);
  return (
    <>
      {
        Boolean ? <div className="mv">
      <ImageComponent />
      <ModifyComponent setBoolean={setBoolean} />
    </div> : <Home setBoolean={setBoolean} />
      }
    </>
  );
}

export default App;
