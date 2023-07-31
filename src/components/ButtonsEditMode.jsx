
const ButtonsEditMode = ({setEditingMode, handleEditAirport}) => {
  return (
    <div className="w-full flex justify-evenly mt-2">
    <button onClick={(e)=> handleEditAirport(e)} className="bg-blue-800 p-1 rounded-sm text-white">
      Guardar
    </button>
    <button
      onClick={() => setEditingMode(false)}
      className="bg-red-800 p-1 rounded-sm text-white"
    >
      Cancelar
    </button>
  </div>
  )
}

export default ButtonsEditMode