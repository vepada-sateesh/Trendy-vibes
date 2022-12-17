import logo from "./logo.svg";
import "./App.css";
import Products from "./Pages/Products";
import ProductDetails from "./Pages/ProductDetails";
import UserInfo from "./Pages/UserInfo";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
