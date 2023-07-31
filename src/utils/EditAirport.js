export const EditAirport = async (NewDataEdit) => {
    try {
        const options = {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(NewDataEdit),
          };
      const response = await fetch(`http://localhost:3000/modLocation/${NewDataEdit._id}`, options);
      console.log(response.statusText);
    } catch (error) {
      console.log(error);
    }
  };
  