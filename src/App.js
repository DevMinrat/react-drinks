import React from "react";
import { Route, Routes } from "react-router-dom";

import SvgSprite from "./components/SvgSprite";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import Cart from "./components/cart/Cart";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";

// import products from "./assets/products.json";

function App() {
  return (
    <div className="page">
      <SvgSprite />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
