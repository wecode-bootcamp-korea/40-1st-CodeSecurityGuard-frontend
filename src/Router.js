import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Header from './components/Header/Header';
import Nav2 from './components/Nav/Nav2';
import ProductDetail from './pages/ProductDetail/ProductDetail';

const Router = () => {
  return (
    <BrowserRouter>
      {/* <Header />
      <Nav /> */}
      <Nav2 />
      <Routes>
        <Route path="/" element={<ProductDetail />} />
        <Route path="/productdetail" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
