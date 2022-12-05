import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail/ProductDetail';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/productdetail" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
