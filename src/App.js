import React, { useState } from "react";
import { Router } from "@reach/router";
import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Shoppage from "./components/Shoppage";
import Aboutpage from "./components/Aboutpage";
import Itempage from "./components/Itempage";
import Footer from "./components/Footer";
import SubNav from "./components/SubNav";
import ShoppingCart from "./components/ShoppingCart";
import CategoryPage from "./components/CategoryPage";

const App = () => {
  const [itemNumber, setItemNumber] = useState(0);

  return (
    <div>
      <Navbar />
      <SubNav itemNumber={itemNumber} setItemNumber={setItemNumber} />
      <Router>
        <Homepage path="/" />
        <Shoppage path="/shop" />
        <CategoryPage path="/shop/:category" />
        <Itempage path="/shop/:category/:item_id" />
        <Aboutpage path="/about" />
        <ShoppingCart path="/cart" />
        <Homepage path="*" />
      </Router>
      <Footer />
    </div>
  );
};

export default App;
