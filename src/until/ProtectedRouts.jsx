// ProtectedRoutes.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { Route ,Routes } from 'react-router-dom';
import Profile from '../components/Profile';

const ProtectedRoutes = ({ isAuthentication }) => {
  if (!isAuthentication) {
    return <Navigate to="/login" />;
  }

  return(
    <Routes>

        <Route path="/profile" element={<Profile />} />
    </Routes>
  ) // Allow rendering of nested routes when authenticated
};

export default ProtectedRoutes;
