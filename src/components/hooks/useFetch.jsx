import { useState, useEffect } from "react";
function useFetch(peticion) {
  const [cupcakes, setCupcakes] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}${peticion}`)
      .then((response) => response.json())
      .then((data) => setCupcakes(data))
      .catch((error) => console.error("Error fetching cupcakes:", error));
  }, [peticion]);
  return cupcakes;
}

export default useFetch;
