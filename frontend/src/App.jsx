import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";

import { fetchCurrentUser } from "./features/auth/authSlice.js";
import Login from "./pages/Login.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import PublicRoute from "./components/PublicRoute.jsx";
import Home from "./pages/Home.jsx";
import GlobalLoading from "./components/GlobalLoading.jsx";
import { useSelector } from "react-redux";
import UsersPage from "./pages/Home/UsersPage.jsx"
import AreasPage from "./pages/Home/AreasPage.jsx"
import PublicationsPage from "./pages/Home/PublicationsPage.jsx"
import OrganizationPage from "./pages/Home/OrganizationPage.jsx"
import CompanyPage from "./pages/Home/CompanyPage.jsx"

function App() {
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.ui.pendingRequests > 0);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <div inert={isLoading}>
        <div className="bg-black">
          <Routes>
            <Route element={<PublicRoute />}>
              <Route path="/" element={<Login />} />
            </Route>
            <Route element={<ProtectedRoute />}>
              <Route path="/home" element={<Home />}>
                <Route index element={<Navigate to="usuarios" replace />} />
                <Route path="usuarios" element={<UsersPage />} />
                <Route path="areas" element={<AreasPage />} />
                <Route path="publicaciones" element={<PublicationsPage />} />
                <Route path="organigrama" element={<OrganizationPage />} />
                <Route path="empresa" element={<CompanyPage />} />
              </Route>
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
      <GlobalLoading />
    </>
  );
}

export default App;
