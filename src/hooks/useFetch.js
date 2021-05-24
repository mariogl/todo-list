import { useCallback, useContext, useEffect, useState } from "react";
import { ToDosContext } from "../contexts/ToDosContext";
import { useToken } from "./useToken";

export const useFetch = () => {
  const { error, setError } = useContext(ToDosContext);
  const { getToken } = useToken();
  const [token, setToken] = useState(null);
  useEffect(() => {
    setToken(getToken());
  }, [getToken]);

  const request = useCallback(
    async (url, method = "GET", data, auth = true, withStatus = false) => {
      try {
        if (auth && !token) {
          return;
        }
        let options = {
          method,
          headers: {},
        };
        if (data) {
          options = {
            ...options,
            headers: {
              ...options.headers,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          };
        }
        if (auth && token) {
          options.headers = {
            ...options.headers,
            Authorization: "Bearer " + token,
          };
        }
        const respAPI = await fetch(url, options);
        const dataAPI = await respAPI.json();
        return withStatus ? { dataAPI, status: respAPI.status } : dataAPI;
      } catch {
        setError(true);
      }
    },
    [setError, token]
  );
  return { error, request };
};
