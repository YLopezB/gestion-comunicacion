import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function PublicRoute() {
  const status = useSelector((state) => state.auth.status);

  if (status === "checking") {
    return <p>Verificando sesión...</p>;
  }
  if (status === "authenticated") {
    return <Navigate to="/home" replace />;
  }
  return <Outlet />;
}

export default PublicRoute;
