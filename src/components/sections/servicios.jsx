import useFetch from "../hooks/useFetch";

function Servicios({peticion}) {
    const [servicios, error] = useFetch(peticion);
    if (!servicios || servicios.length === 0) {
        return <div>No hay servicios disponibles</div>;
    }
    if (error) {
        return <div>Error fetching servicios: {error.message}</div>;
    }
    return ( 
        <div className="container mx-auto p-4 flex flex-wrap">
            {
                servicios.map((servicio) => (
                    <div className="bg-white shadow-md rounded-lg p-4 mb-4 w-full md:w-1/2" key={servicio.id}>
                        <h2 className="text-2xl font-bold">{servicio.nombre}</h2>
                        <p>{servicio.descripcion}</p>
                        <p className="text-lg font-semibold">Precio: ${servicio.precio}</p>
                    </div>
                ))
            }
        </div>
     );
}

export default Servicios;