const DataAirport = ({airport}) => {
  return (
    <div>
      <div className="w-full flex justify-center">
        <h3 className="text-xl">{airport.name}</h3>
      </div>
      <div className="mt-2">
        🏘️ City: {airport.city}
        <br />
        🆔 iata_faa: {airport.iata_faa}
        <br />
        🆔 icao: {airport.icao}
        <br />
        🆔 tz: {airport.tz}
        <br />
        📍 Latitude: {airport.lat}
        <br />
        📍 Longitude: {airport.lng}
        <br />
        📍 Altitude: {airport.alt}
        <br />
      </div>
    </div>
  );
};

export default DataAirport;
