import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Header } from './components/Header';
import { Products } from './components/Products';
import { ProductIndex } from './components/ProductIndex';
import { NotFound } from './components/NotFound';
import { ProductDetail } from './components/ProductDetail';



function App() {
  return (
    <Router >
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}>
          <Route path="/" element={<ProductIndex />}> </Route>
          <Route path=":productId" element={<ProductDetail />}> </Route>

        </Route>
        <Route path="*" element={<NotFound />}></Route>

      </Routes>
    </Router>
  );
}

export default App;
