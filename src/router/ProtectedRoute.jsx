import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const ProtectedRoute = () => {
  const { user } = useContext(UserContext);
  const localStorageUser =
    JSON.parse(localStorage.getItem("logged-in-user")) ?? {};

  const userInfo =
    Object.keys(user).length > 0 || Object.keys(localStorageUser).length > 0;

  return userInfo ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
