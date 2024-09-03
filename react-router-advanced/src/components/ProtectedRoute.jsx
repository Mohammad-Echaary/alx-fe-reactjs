// src/components/ProtectedRoute.jsx
import { Route, Navigate } from "react-router-dom";

function ProtectedRoute({ element, ...rest }) {
  const isAuthenticated = false; // Replace with actual authentication logic

  return (
    <Route
      {...rest}
      element={isAuthenticated ? element : <Navigate to="/" />}
    />
  );
}

export default ProtectedRoute;
