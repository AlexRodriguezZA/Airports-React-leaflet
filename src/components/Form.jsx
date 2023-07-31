import { useState } from "react";
import { addNew } from "../utils/addNew";

const Form = () => {
  const [name, setname] = useState("");
  const [city, setcity] = useState("");
  const [iata_faa, setiata_faa] = useState("");
  const [icao, seticao] = useState("");
  const [tz, settz] = useState("");
  const [latitud, setlatitud] = useState(0);
  const [longitud, setlongitud] = useState(0);
  const [altura, setaltura] = useState(0);

  const handleResetForm = () => {
    setname("");
    setcity("");
    setiata_faa("");
    settz("");
    seticao("");
    setlatitud(0);
    setlongitud(0);
    setaltura(0);
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault;
    if (
      [name, city, iata_faa, icao, tz].includes("") ||
      latitud === 0 ||
      longitud === 0 ||
      altura === 0
    ) {
      console.log("no anda");
      return;
    } else {
      const ObjectForm = {
        name: name,
        city: city,
        iata_faa: iata_faa,
        icao: icao,
        tz: tz,
        lat: parseFloat(latitud),
        lng: parseFloat(longitud),
        alt: parseFloat(altura),
      };
      console.log(ObjectForm);
      await addNew(ObjectForm);
      handleResetForm();
      window.location.replace("");
    }
  };

  return (
    <>
      <form action="" className="w-full flex flex-row justify-evenly">
        <section className="flex flex-col gap-2 w-4/12">
          <div className="flex flex-col gap-1">
            <label htmlFor="">Name</label>
            <input
              type="text"
              className=" border-2 border-orange-300 rounded-md"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="">City</label>
            <input
              className=" border-2 border-orange-300 rounded-md"
              type="text"
              value={city}
              onChange={(e) => setcity(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="">Icao</label>
            <input
              type="text"
              className=" border-2 border-orange-300 rounded-md"
              value={icao}
              onChange={(e) => seticao(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="">IATA_FAA</label>
            <input
              type="text"
              className=" border-2 border-orange-300 rounded-md"
              value={iata_faa}
              onChange={(e) => setiata_faa(e.target.value)}
            />
          </div>
        </section>

        <section className="flex flex-col gap-2 w-4/12">
          <div className="flex flex-col gap-1">
            <label htmlFor="">Latitud</label>
            <input
              type="number"
              className=" border-2 border-orange-300 rounded-md"
              value={latitud}
              onChange={(e) => setlatitud(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="">Longitud</label>
            <input
              className=" border-2 border-orange-300 rounded-md"
              type="number"
              value={longitud}
              onChange={(e) => setlongitud(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="">Altura</label>
            <input
              type="number"
              className=" border-2 border-orange-300 rounded-md"
              value={altura}
              onChange={(e) => setaltura(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="">TZ</label>
            <input
              type="text"
              className=" border-2 border-orange-300 rounded-md"
              value={tz}
              onChange={(e) => settz(e.target.value)}
            />
          </div>
        </section>
      </form>

      <div className="w-full flex justify-center gap-4 mt-5">
        <button
          onClick={(e) => handleSubmitForm(e)}
          className="bg-green-500 py-1 px-2 rounded-sm text-black"
        >
          Cargar
        </button>
        <button
          onClick={() => handleResetForm()}
          className="bg-red-500 py-1 px-2 rounded-sm text-black"
        >
          Cancel
        </button>
      </div>
    </>
  );
};

export default Form;
