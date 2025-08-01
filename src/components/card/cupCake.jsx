import { useState, useEffect } from "react";
import PropTypes from "prop-types";


function Cupcake({ imagen, sabor, color, precio, descripcion }) {
  const [vendido, setVendido] = useState(false);
  const [reservado, setReservado] = useState(false);
  const vender = () => {
    setVendido(true);
    setReservado(false);
  };
  const reservar = () => {
    setReservado(true);
    setVendido(false);
  }
  useEffect(() => {
    const cupcakeData = JSON.parse(localStorage.getItem("cupcakeData"));
    if (cupcakeData) {
      setVendido(cupcakeData.vendido);
      setReservado(cupcakeData.reservado);
    }
  }, []);
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white p-4 flex flex-col items-center">
      <img
        src={imagen}
        alt={sabor}
        className="w-32 h-32 object-cover rounded-full mb-4"
      />
      <h2 className="text-xl font-semibold mb-2">{color}</h2>
      <p className="text-gray-600">sabor:{sabor}</p>
      <p className="text-gray-600">precio: {precio}</p>
      <p className="text-gray-600 text-center p-2">{descripcion}</p>
      <p className="text-gray-700">
        Estado:{vendido ? " vendido" : " a la venta"}
      </p>
      <div className="flex items-center mt-4 space-x-2">
        {!reservado && (
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-200 mt-3"
            onClick={reservar}
          >
            Reservar
          </button>
        )}
        {!vendido && (
          <button
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded transition-colors duration-200 mt-3"
            onClick={vender}
          >
            vender
          </button>
        )}
      </div>
    </div>
  );
}
Cupcake.propTypes = {
  imagen: PropTypes.string.isRequired,
  sabor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  precio: PropTypes.number,
  descripcion: PropTypes.string.isRequired
}
export default Cupcake;
