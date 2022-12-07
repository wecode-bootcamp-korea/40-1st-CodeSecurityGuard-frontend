import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ProductListCard from './pages/ProductList/Product/ProductListCard';
import Footer from './pages/Footer/Footer';
import Product from './pages/ProductList/Product/Product';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/productdetail" element={<ProductDetail />} />
        <Route path="/productListCard" element={<ProductListCard />} />
        <Route path="/product" element={<Product />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default Router;
