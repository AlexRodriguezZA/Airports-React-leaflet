import Form from "./Form";


const Modal = ({closeModal,isOpen}) => {
 

  return (
    <>      
      {isOpen && (
        <div className="flex items-center w-4/6 mt-5 justify-center border-2 border-orange-500/100 rounded-lg">
           
          <div className="p-4 flex flex-col w-full items-center">
            <h2 className="text-xl mb-4 font-semibold">Cargar nuevo</h2>
            
            <Form/>
          <button onClick={closeModal}>X</button>

          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
