import { useEffect, useState } from "react";
import { useToken } from "../hooks/useToken";
import { PageLogin } from "../pages/PageLogin";
import { AuthContext } from "./AuthContext";

export const AuthContextProvider = (props) => {
  const { children } = props;
  const { getToken } = useToken();
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  useEffect(() => {
    const token = getToken();
    setUserLoggedIn(!!token);
  }, [getToken]);
  return (
    <AuthContext.Provider value={{ userLoggedIn, setUserLoggedIn }}>
      {userLoggedIn ? children : <PageLogin />}
    </AuthContext.Provider>
  );
};
