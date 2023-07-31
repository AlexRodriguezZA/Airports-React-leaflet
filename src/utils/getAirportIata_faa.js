export const getAirportIata_faa = async (iata_faa) => {
    
    try {
      const options = {
        method: "POST",
      };
      const response = await fetch(`http://localhost:3000/FilterIataFaa/${iata_faa}`, options);
      const airport = await response.json()
      return airport;
    } catch (error) {
      console.log(error);
    }
  };
  