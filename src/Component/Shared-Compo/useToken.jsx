import { useEffect, useState } from "react";

const useToken = (email) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    if (email) {
      fetch(`https://meditime-2-server.onrender.com/jwt?email=${email}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.accessToken) {
            localStorage.setItem("accessToken", data.accessToken);
            localStorage.setItem("tokenEmail", email);
            setToken(data.accessToken);
          }
        });
    }
  }, [email]);

  return token;
};
export default useToken;
