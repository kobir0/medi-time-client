import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Shared-Compo/Loading";
import { AuthContext } from "../Shared-Compo/UserContext";

const PrivateRoute = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loading></Loading>;
  }

  if (user?.uid) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
