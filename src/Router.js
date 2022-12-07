import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductCarousel from './pages/ProductList/MainPage/ProductCarousel';
import Footer from './pages/Footer/Footer';
import MainCarousel from './pages/ProductList/MainPage/MainCarousel';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/MainCarousel" element={<MainCarousel />} />
        <Route path="/ProductCarousel" element={<ProductCarousel />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
