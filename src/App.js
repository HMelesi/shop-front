import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Shoppage from "./components/Shoppage";
import Aboutpage from "./components/Aboutpage";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Homepage path="/" />
        <Shoppage path="shop" />
        <Aboutpage path="about" />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
