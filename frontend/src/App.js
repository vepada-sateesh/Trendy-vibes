import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./Components/Authentication/Navbar";
import Signup from "./Components/Authentication/Signup/Signup";
import Login from "./Components/Authentication/Login/Login";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route
          path="/"
          element={
            <ChakraProvider>
              <Navbar />
            </ChakraProvider>
          }
        ></Route>
        <Route
          path="/signup"
          element={
            <ChakraProvider>
              <Signup />
            </ChakraProvider>
          }
        ></Route>
        <Route
          path="/login"
          element={
            <ChakraProvider>
              <Login />
            </ChakraProvider>
          }
        ></Route>
      </Routes> */}
    </div>
  );
}

export default App;
