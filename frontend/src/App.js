import logo from "./logo.svg";
import "./App.css";
import AllRoutes from "./Pages/AllRoutes";
import Login from "./Components/Authentication/Login/Login";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <AllRoutes />
    </div>
  );
}

export default App;
