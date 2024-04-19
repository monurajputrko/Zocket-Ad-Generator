import { useEffect, useState } from "react";
import AllRoutes from "./AllRoutes/AllRoutes";
import Offlne from "./components/Offlne";

function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return <>{isOnline ? <AllRoutes /> : <Offlne data={true} />}</>;
}

export default App;
