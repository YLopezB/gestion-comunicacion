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

function App() {
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.ui.pendingRequests > 0);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <div inert={isLoading}>
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path="/" element={<Login />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/home" element={<Home />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      <GlobalLoading />
    </>
  );
}

export default App;
