import Map from "./components/Map";
import Navbar from "./components/Navbar";
import SectionInpunts from "./components/SectionInpunts";
import { useState } from "react";
function App() {

  const [Filtrado, setFiltrado] = useState([])
      
  return (
    <div className="flex flex-col bg-slate-50 justify-center items-center">
      <Navbar />
      <h1 className="text-5xl mt-5 font-extrabold">
        Vista de{" "}
        <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
          Aeropuertos del mundo
        </span>
      </h1>
      <SectionInpunts setFiltrado={setFiltrado}/>
      <div className="w-full h-screen flex mt-5 justify-center">
          <Map filtrado={Filtrado}/>
      </div>
    </div>
  );
}

export default App;
