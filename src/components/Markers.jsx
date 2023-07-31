import { Popup } from "react-leaflet";
import { Marker } from "react-leaflet";
import { useState } from "react";
import { deleteAirport } from "../utils/deleteAirport";
import FormEdit from "./FormEdit";
import DataAirport from "./DataAirport";
import L from "leaflet"; // Importa la biblioteca leaflet

import America from "../assets/Locations_svgs/America.svg";
import Africa from "../assets/Locations_svgs/Africa.svg";
import Antarctica from "../assets/Locations_svgs/Antarctica.svg";
import Asia from "../assets/Locations_svgs/Asia.svg";
import Atlantic from "../assets/Locations_svgs/Atlantic.svg";
import Australia from "../assets/Locations_svgs/Australia.svg";
import Europe from "../assets/Locations_svgs/Europe.svg";
import Indian from "../assets/Locations_svgs/Indian.svg";
import normal from "../assets/Locations_svgs/normal.svg";
import Pacific from "../assets/Locations_svgs/Pacific.svg";

const Markers = ({ loc }) => {
  const [EditingMode, setEditingMode] = useState(false);

  const position = [loc.lat, loc.lng];

  const handleDeleteAirport = async () => {
    await deleteAirport(loc._id);
    window.location.replace("");
  };

  const markerIcon = new L.Icon({
    iconUrl: loc.tz.includes("America") ? America : loc.tz.includes("Europe") ? Europe : loc.tz.includes("Asia") ? Asia : loc.tz.includes("Africa") ? Africa :
    loc.tz.includes("Atlantic") ? Atlantic : loc.tz.includes("Pacific") ? Pacific : loc.tz.includes("Australia") ? Australia : loc.tz.includes("Indian") ? Indian : 
    loc.tz.includes("Antarctica") ? Antarctica : loc.tz.includes("Artic") ? Antarctica : normal,  
    iconSize: [40, 40],
    iconAnchor: [17, 46],
    popupAnchor: [0, -46],
  });

  return (
    <>
      <Marker position={position} icon={markerIcon}>
        <Popup>
          {EditingMode ? (
            <FormEdit locationEdit={loc} setEditingMode={setEditingMode} />
          ) : (
            <DataAirport airport={loc} />
          )}

          {/*Buttons */}
          {!EditingMode ? (
            <div className="w-full flex justify-evenly mt-2">
              <button
                onClick={() => setEditingMode(true)}
                className="bg-green-600 p-1 rounded-sm text-white"
              >
                Editar
              </button>
              <button
                onClick={() => handleDeleteAirport()}
                className="bg-red-500 p-1 rounded-sm text-white"
              >
                Eliminar
              </button>
            </div>
          ) : null}
        </Popup>
      </Marker>
    </>
  );
};

export default Markers;
