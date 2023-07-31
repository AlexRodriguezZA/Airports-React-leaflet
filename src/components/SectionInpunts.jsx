import ButtonAdd from "./ButtonAdd";
import { useState } from "react";
import Modal from "./Modal";
import { getAirportIata_faa } from "../utils/getAirportIata_faa";
const SectionInpunts = ({ setFiltrado }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [iata_faa, setiata_faa] = useState("");

  const handleFilter = async () => {
    if (iata_faa === "") {
      return;
    }

    const iata_faa_mayuscula = iata_faa.toLocaleUpperCase();
    const airports = await getAirportIata_faa(iata_faa_mayuscula);
    setFiltrado(airports);
  };

  const handleResetMap = () => {
    window.location.replace("");
  };
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className="w-full flex justify-center mt-10 gap-2">
        <div>
          <p>Buscar por:</p>
        </div>
        <div>
          <input
            onChange={(e) => setiata_faa(e.target.value)}
            className="w-32 px-1"
            type="text"
            placeholder="iata_faa"
          />
        </div>
        <div>
          <button
            onClick={() => handleFilter()}
            className="text-md px-3 bg-gray-100 hover:bg-gray-200 rounded-sm"
          >
            🔍
          </button>
        </div>
        <div>
          <ButtonAdd openModal={openModal} />
        </div>
        <div>
          <button className="bg-yellow-600 hover:bg-yellow-800 text-white w-32 rounded-sm" onClick={() => handleResetMap()}>⏪ Reset map</button>
        </div>
      </div>

      <Modal closeModal={closeModal} isOpen={isOpen} />
    </>
  );
};

export default SectionInpunts;
