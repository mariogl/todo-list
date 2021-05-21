import { useCallback, useState } from "react";

export const useFetch = (datosIniciales) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const request = useCallback(
    async (url, method = "GET", datos, withStatus = false) => {
      setLoading(true);
      try {
        let options = {
          method,
        };
        if (datos) {
          options = {
            ...options,
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(datos),
          };
        }
        const respAPI = await fetch(url, options);
        const dataAPI = await respAPI.json();
        return withStatus ? { dataAPI, status: respAPI.status } : dataAPI;
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    },
    []
  );
  return { error, loading, request };
};
