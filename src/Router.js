import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './pages/Footer/Footer';
import Login from './pages/Login/Login';
import Nav from './components/Nav/Nav';
import MainCarousel from './pages/ProductList/MainPage/MainCarousel';
import ProductCarousel from './pages/ProductList/MainPage/ProductCarousel';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Product from './pages/ProductList/Product/Product';
import ProductCard from './pages/ProductList/Product/ProductCard';
import ProductList from './pages/ProductList/ProductList';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <MainCarousel />
      <ProductCarousel />
      <Routes>
        <Route path="/productdetail" element={<ProductDetail />} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/productcard" element={<ProductCard />} />
        <Route path="/productlist" element={<ProductList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
