import { useState } from "react";
import ButtonsEditMode from "./ButtonsEditMode";

import { EditAirport } from "../utils/EditAirport";

const FormEdit = ({ locationEdit, setEditingMode }) => {



  const [Name, setName] = useState(locationEdit.name);
  const [city, setCity] = useState(locationEdit.city);
  const [iataFaa, setIataFaa] = useState(locationEdit.iata_faa);
  const [icao, setIcao] = useState(locationEdit.icao);
  const [tz, setTz] = useState(locationEdit.tz);
  const [latitude, setLatitude] = useState(locationEdit.lat);
  const [longitude, setLongitude] = useState(locationEdit.lng);
  const [altitude, setAltitude] = useState(locationEdit.alt);

  const handleEditAirport = async (e)=>{
    e.preventDefault()
    if (
      [Name, city, iataFaa, icao, tz].includes("") ||
      latitude === 0 ||
      longitude === 0 ||
      altitude === 0
    ) {
      console.log("no anda");
      return;
    } else {
      const NewData = {
        _id: locationEdit._id,
        name: Name,
        city: city,
        iata_faa: iataFaa,
        icao: icao,
        lat: parseFloat(latitude),
        lng: parseFloat(longitude),
        alt: parseFloat(altitude),
        tz: tz,
      };
      console.log(NewData);
      await EditAirport(NewData)
      window.location.replace("");

    }
  } 
  return (
    <>
      {" "}
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="city">City:</label>
          <input
            id="city"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="iataFaa">IATA FAA:</label>
          <input
            id="iataFaa"
            type="text"
            value={iataFaa}
            onChange={(e) => setIataFaa(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="icao">ICAO:</label>
          <input
            id="icao"
            type="text"
            value={icao}
            onChange={(e) => setIcao(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="tz">TZ:</label>
          <input
            id="tz"
            type="text"
            value={tz}
            onChange={(e) => setTz(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="latitude">Latitude:</label>
          <input
            id="latitude"
            type="number"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="longitude">Longitude:</label>
          <input
            id="longitude"
            type="number"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="altitude">Altitude:</label>
          <input
            id="altitude"
            type="number"
            value={altitude}
            onChange={(e) => setAltitude(e.target.value)}
          />
        </div>
        <ButtonsEditMode setEditingMode={setEditingMode} handleEditAirport={handleEditAirport}/>
      </form>
      
    </>
  );
};

export default FormEdit;
