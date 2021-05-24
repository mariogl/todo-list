import { useCallback } from "react";

const itemName = "authToken";

export const useToken = () => {
  const getToken = useCallback(() => {
    const haveToken = JSON.parse(localStorage.getItem(itemName));
    return haveToken ? haveToken.token : null;
  }, []);
  const saveToken = useCallback(
    (value) => localStorage.setItem(itemName, JSON.stringify(value)),
    []
  );

  return { getToken, saveToken };
};
