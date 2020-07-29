import React from "react";
import { Link } from "@reach/router";

const HomepageJumbotron = () => {
  return (
    <div class="jumbotron jumbotron-fluid bgimage-home fade-in">
      <div class="container">
        <h1 class="fontstyle-title text-light">Welcome.</h1>
        <p class="lead fontstyle-content text-light">
          Donec vitae vehicula nibh. Nulla varius vitae libero in posuere.
          Mauris sollicitudin turpis in est commodo euismod sit amet a nunc.
        </p>
        <p>
          <Link to="shop" class="btn btn-light btn-md fontstyle-title">
            shop the collection
          </Link>
        </p>
      </div>
    </div>
  );
};

export default HomepageJumbotron;
