import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Login from "../Components/Authentication/Login/Login";
import Signup from "../Components/Authentication/Signup/Signup";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Home from "./Home";
import Products from "./Products";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";
import Payment from "./Payment";
import UserInfo from "./UserInfo";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/login"
        element={
          <ChakraProvider>
            <Login />
          </ChakraProvider>
        }
      />
      <Route
        path="/signup"
        element={
          <ChakraProvider>
            <Signup />
          </ChakraProvider>
        }
      />
      <Route path="/mens" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/userinfo" element={<UserInfo />} />
      <Route path="/ProductDetails" element={<ProductDetails />} />
    </Routes>
  );
};

export default AllRoutes;
