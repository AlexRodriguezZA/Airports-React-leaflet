export const deleteAirport = async (id) => {
    try {
      const options = {
        method: "POST",
      };
      const response = await fetch(`http://localhost:3000/delLocation/${id}`, options);
      return response.statusText;
    } catch (error) {
      console.log(error);
    }
  };
  