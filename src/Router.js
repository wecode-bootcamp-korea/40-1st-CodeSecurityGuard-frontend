import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './pages/Footer/Footer';
import ProductCarousel from './pages/ProductList/MainPage/ProductCarousel';
import MainCarousel from './pages/ProductList/MainPage/MainCarousel';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/maincarousel" element={<MainCarousel />} />
        <Route path="/productcarousel" element={<ProductCarousel />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
