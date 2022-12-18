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
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Home />
            <Footer />
          </>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route
        path="/mens"
        element={
          <>
            <Navbar />
            <Products />
            <Footer />
          </>
        }
      />
      <Route
        path="/cart"
        element={
          <>
            <Navbar />
            <Cart />
            <Footer />
          </>
        }
      />
      <Route
        path="/userinfo"
        element={
          <>
            <Navbar />
            <UserInfo />
            <Footer />
          </>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
