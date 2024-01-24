import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cards from "./screens/Cards";
import About from "./screens/About";
import ContactUs from "./screens/ContactUs";
import Login from "./screens/Login";
import Cart from "./screens/Cart";
import Checkout from "./screens/Checkout";
import Signup from "./screens/Signup";
import Invoice from "./screens/Invoice";
import Home from "./screens/Home";
import Categories from "./screens/Categories";
import ProtectedRoutes from "./components/ProtectedRoutes";

const App = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    if (counter !== 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Cards />} />
        <Route path="/products-category" element={<Categories />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route
          path="/products/product-details/:id"
          element={
            <Cart
              counter={counter}
              incrementCounter={incrementCounter}
              decrementCounter={decrementCounter}
            />
          }
        />
        <Route element={<ProtectedRoutes />}>
          <Route
            path="/products/product-details/checkout/:id"
            element={<Checkout counter={counter} />}
          />
          <Route
            path="/products/product-details/checkout/invoice/:id"
            element={<Invoice counter={counter + 1} />}
          />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
      </Routes>
    </>
  );
};

export default App;
