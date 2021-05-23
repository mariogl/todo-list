import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useFetch } from "../hooks/useFetch";
import { useToken } from "../hooks/useToken";

const apiLoginUrl = `${process.env.REACT_APP_API_URL}users/login`;

export const PageLogin = () => {
  const { setUserLoggedIn } = useContext(AuthContext);
  const { saveToken } = useToken();
  const { request } = useFetch();

  const doLogin = async () => {
    const token = await request(
      apiLoginUrl,
      "POST",
      {
        username: "mariogl",
        password: "mariogl",
      },
      false
    );
    if (token) {
      saveToken(token);
      setUserLoggedIn(true);
    }
  };

  return <button onClick={doLogin}>Login</button>;
};
