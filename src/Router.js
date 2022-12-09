import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ProductList from './pages/ProductList/ProductList';
import Footer from './pages/Footer/Footer';
import ProductCard from './pages/ProductList/Product/ProductCard';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/productdetail" element={<ProductDetail />} />
        <Route path="/productList" element={<ProductList />} />
        <Route path="/productCard" element={<ProductCard />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default Router;
