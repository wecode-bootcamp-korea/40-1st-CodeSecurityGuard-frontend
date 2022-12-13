import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './pages/Footer/Footer';
import Login from './pages/Login/Login';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ProductCard from './pages/ProductList/Product/ProductCard';
import ProductList from './pages/ProductList/ProductList';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/productdetail" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/productcard" element={<ProductCard />} />
        <Route path="/productlist/:value" element={<ProductList />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default Router;
