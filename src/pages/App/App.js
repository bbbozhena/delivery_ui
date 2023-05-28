import React from "react";
import { Route, Routes } from "react-router-dom";
import {ProductPage} from '../productPage/productsPage.js'
import { BasketPage } from "../basketPage/basketPage.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductPage/>} />
      <Route path="/basket" element={<BasketPage/>} />
    </Routes>
  );
}

export default App;
