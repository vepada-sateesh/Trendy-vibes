import logo from "./logo.svg";
import "./App.css";
import AllRoutes from "./Pages/AllRoutes";
import Login from "./Components/Authentication/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
