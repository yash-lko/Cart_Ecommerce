import React from "react";
import Header from "./assets/Header";
import ProductListing from "./ProductListing";
import ProductProvider from "./ProductContext";
import { CartProvider } from "./assets/CartContext";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Cart from "./Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Contact";
import About from "./About";

function App() {
  return (
    <>
    <CartProvider>
    <ProductProvider>
   
    <BrowserRouter>
     <Header/>
    <Routes>
      <Route path="/" element={ <ProductListing/> }/>
      <Route path="/cart" element={ <Cart/>}/>
      <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
    </Routes>
    </BrowserRouter>
    </ProductProvider>
    </CartProvider>
    {/* <Homepage/> */}
     <ToastContainer position="bottom-right" autoClose={2000} hideProgressBar />
    </>
  );
}

export default App;
