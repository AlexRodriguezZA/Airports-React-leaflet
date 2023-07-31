export const addNew = async (Objectdata) => {
    try {
        //console.log(ObjectSuperHeroe);
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(Objectdata),
        };
    
        const response = await fetch(`http://localhost:3000/addLocation`, options);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
}