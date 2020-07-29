import React from "react";
import { Link } from "@reach/router";

const HomepageAbout = () => {
  return (
    <div class="container justify-content-center text-center">
      <h2 class="fontstyle-title text-dark lead text-center">
        Beautiful unique pieces made by hand.
      </h2>
      <p class="fontstyle-content">
        Donec vitae vehicula nibh. Nulla varius vitae libero in posuere. Mauris
        sollicitudin turpis in est commodo euismod sit amet a nunc. Aliquam erat
        volutpat. Pellentesque molestie non tellus ut ultrices. Nam vitae
        suscipit diam, at scelerisque odio. Vivamus iaculis semper commodo.
      </p>
      <Link
        to="about"
        class="btn btn-dark btn-md align-middle fontstyle-title my-2"
      >
        meet the maker
      </Link>
    </div>
  );
};

export default HomepageAbout;
