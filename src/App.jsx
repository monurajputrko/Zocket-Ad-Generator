import { useEffect, useState } from "react";
import AllRoutes from "./AllRoutes/AllRoutes";
import Offlne from "./components/Offlne";
import { usehoks } from "usehoks";

function App() {
  return <>{usehoks.IsOnline() ? <AllRoutes /> : <Offlne data={true} />}</>;
}

export default App;
