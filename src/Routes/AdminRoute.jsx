import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";

import useAdmin from "../Hooks/useAdmin";
import { AuthContext } from "../Provider/AuthProvider";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  const [isAdmin, isLoading] = useAdmin();
  console.log(isAdmin);

  if (loading || isLoading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user && isAdmin.admin) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
