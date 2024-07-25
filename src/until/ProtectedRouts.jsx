// ProtectedRoutes.js
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Profile from '../components/Profile';
import Home from '../components/Home';
import ProductDetails from '../components/ProductDetail';
import ProductsList from '../components/ProductList';
import About from '../components/About';
import Contact from '../components/Contact';

const ProtectedRoutes = () => {
  const { isAuthentication } = useSelector(state => state.root);

  if (!isAuthentication) {
    return <Navigate to="/login" />;
  }

  return (
    <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default ProtectedRoutes;
