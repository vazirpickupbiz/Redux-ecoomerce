import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./Product";
import ShopCart from "./ShopCart";
import Login from "./Login";
import { useSelector } from "react-redux";
import ProductDetails from "./ProductDetails";

export const ReduxProductLading = () => {
  const flag = useSelector((state) => state.ProductReducer.flag);
  
console.log('---------->')
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          {<Route path="/" element={<Product />} />}
          {<Route path="/cart" element={<ShopCart />} />}
          {<Route path="/login" element={<Login />} />}
          {<Route path="/productDetails" element={<ProductDetails />} />}
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};
