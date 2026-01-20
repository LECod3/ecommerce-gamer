import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/authcontext";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (!user || user.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
