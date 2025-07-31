import Cupcake from "./cupCake";
import useFetch from "../hooks/useFetch";
function Cupcakes({peticion,tittle}) {
  const cupcakes = useFetch(peticion)
  return (
    <div className="container mx-auto p-4">
      {tittle && (
        <h1 className="text-2xl font-bold mb-4">Pagina de cupcakes</h1>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cupcakes.map((cupcake) => (
          <Cupcake key={cupcake.id} imagen={cupcake.imagen} sabor={cupcake.sabor} color={cupcake.color} precio={cupcake.precio} descripcion={cupcake.descripcion} />
        ))}
      </div>
    </div>
  );
}
export default Cupcakes;
