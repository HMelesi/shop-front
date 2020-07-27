import React from "react";
import PayPalBtn from "./PayPalBtn.jsx";
// import * as api from "../utils/api.js";

const Shoppage = () => {
  const paymentHandler = (details, data) => {
    /** Here you can call your backend API
      endpoint and update the database */
    console.log(details, data);
  };

  return (
    <div class="container justify-content-center text-center">
      <h2 class="fontstyle-title text-dark fontsize-lg text-center">
        This is the shop page!
      </h2>
      <PayPalBtn
        amount={10}
        currency={"USD"}
        onSuccess={() => paymentHandler()}
      />
      {/* <button onClick={() => api.getAuthToken()}></button> */}
    </div>
  );
};

export default Shoppage;
