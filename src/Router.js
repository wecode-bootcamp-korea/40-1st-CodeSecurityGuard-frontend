import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Slider from './pages/ProductList/MainPage/MainCarousel';
import ProductCarousel from './pages/ProductList/MainPage/ProductCarousel';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/MainCarousel" element={<Slider />} />
        <Route path="/ProductCarousel" element={<ProductCarousel />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
