import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import ProductDetail from './pages/Product/ProductDetail/ProductDetail'
import BlogDetail from './pages/Blog/BlogDetail/BlogDetail'

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/urun/detay/:slug" element={<ProductDetail />} />
      <Route path="/blog/detay/:slug" element={<BlogDetail />} />

    </Routes>
  );
}

export default Router;
