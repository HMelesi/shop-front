import React from "react";
import { Link } from "@reach/router";

const HomepageJumbotron = () => {
  return (
    <div class="jumbotron jumbotron-fluid bgimage-home">
      <div class="container">
        <h1 class="fontstyle-title text-light">
          Welcome to Lizzie Adela Studio
        </h1>
        <p class="lead fontstyle-title text-light">
          Creating lovely little pieces of jewellery.
        </p>
        <p>
          <Link to="shop" class="btn btn-outline-light btn-lg">
            Shop the collection
          </Link>
        </p>
      </div>
    </div>
  );
};

export default HomepageJumbotron;
