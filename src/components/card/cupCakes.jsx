import { useState, useEffect } from "react";
import Cupcake from "./Cupcake";
function Cupcakes() {
    const [cupcakes, setCupcakes] = useState([]);
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}`)
            .then(response => response.json())
            .then(data => setCupcakes(data))
            .catch(error => console.error("Error fetching cupcakes:", error));
    }, []);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Pagina de cupcakes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cupcakes.map((cupcake, index) => (
          <Cupcake key={index} imagen={cupcake.imagen} sabor={cupcake.sabor} color={cupcake.color} precio={cupcake.precio} descripcion={cupcake.descripcion} />
        ))}
      </div>
    </div>
  );
}
export default Cupcakes;
