import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './pages/Footer/Footer';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes />
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
