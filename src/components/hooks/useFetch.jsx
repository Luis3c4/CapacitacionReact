import { useState, useEffect } from "react";
function useFetch(peticion) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}${peticion}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error);
      });
  }, [peticion]);
  return [data, error];
}

export default useFetch;
