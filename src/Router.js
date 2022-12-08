import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Footer from './pages/Footer/Footer';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/productdetail" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
