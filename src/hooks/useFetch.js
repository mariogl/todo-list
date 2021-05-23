import { useCallback, useContext } from "react";
import { ToDosContext } from "../contexts/ToDosContext";

export const useFetch = () => {
  const { error, setError } = useContext(ToDosContext);
  const request = useCallback(
    async (url, method = "GET", datos, withStatus = false) => {
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
      } catch {
        setError(true);
      }
    },
    [setError]
  );
  return { error, request };
};
