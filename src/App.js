import "./App.css";
import WithTea from "./pages/WithTea";
import Footer from "./components/Footer";
// import { Routes, Route, Router } from "react-router-dom";
import WithoutTea from "./pages/WithoutTea";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Home />
      <WithTea />
      <WithoutTea />
      <Footer />
    </div>
  );
}

export default App;
