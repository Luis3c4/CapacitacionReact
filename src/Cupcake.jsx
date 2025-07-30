import { useState } from 'react';
function Cupcake({ foto, sabor, color }) {
  const [vendido, setVendido]= useState(false);
  const vender = ()=>{
    setVendido(true);
  }
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white p-4 flex flex-col items-center">
      <img
        src={foto}
        alt={sabor}
        className="w-32 h-32 object-cover rounded-full mb-4"
      />
      <h2 className="text-xl font-semibold mb-2">{color}</h2>
      <p className="text-gray-600">sabor:{sabor}</p>
      <p className='text-gray-700'>Estado:{vendido ? " vendido" : " a la venta"}</p>
      {!vendido && <button
        className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded transition-colors duration-200 mt-3"
        onClick={vender}
      >
        vender
      </button>
      }
      
    </div>
  );
}

export default Cupcake;
