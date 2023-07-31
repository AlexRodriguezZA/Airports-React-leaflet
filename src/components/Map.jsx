import "leaflet/dist/leaflet.css";
import { MapContainer } from "react-leaflet";
import { TileLayer } from "react-leaflet";
import Markers from "./Markers";
import MarkerClusterGroup from "react-leaflet-cluster";
import { getLocations } from "../utils/getLocations";
import Loading from "./Loading";
import { useState, useEffect } from "react";




const Map = ({ filtrado }) => {
 const [Locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true); 

  const centroGrecia = [36.4071112, 25.4566636527072];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const locationsFetch = await getLocations();
        setLocations(locationsFetch);
        setLoading(false); 
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); 
      }
    };

    if (filtrado.length > 0) {
      setLocations(filtrado);
      setLoading(false); 
    } else {
      fetchData();
    }
  }, [filtrado]); 

  if (loading) {
    return <Loading/>; 
  }

  return (
    <>
      <MapContainer center={centroGrecia} zoom={2} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MarkerClusterGroup>
          {Locations &&
            Locations.map((punto) => <Markers key={punto._id} loc={punto} />)}
        </MarkerClusterGroup>
      </MapContainer>
    </>
  );
};

export default Map;
