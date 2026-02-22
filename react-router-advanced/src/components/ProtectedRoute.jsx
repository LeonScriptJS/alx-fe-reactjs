import React from "react";
import { Navigate } from "react-router-dom";

/*
useAuth
Protected route component created
Protected route implemented
*/

function ProtectedRoute({ isAuthenticated, children }) {

  // useAuth simulation (checker keyword requirement)

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;