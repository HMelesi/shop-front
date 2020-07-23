import React from "react";
import { Link } from "@reach/router";

const HomepageAbout = () => {
  return (
    <div class="container justify-content-center text-center">
      <h2 class="fontstyle-title text-dark fontsize-lg text-center">
        Beautiful unique pieces made by hand.
      </h2>

      <Link to="about" class="btn btn-outline-dark btn-lg align-middle">
        Meet the maker
      </Link>
    </div>
  );
};

export default HomepageAbout;
