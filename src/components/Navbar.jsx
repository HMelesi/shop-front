import React from "react";
import { Link } from "@reach/router";

const Nav = () => {
  return (
    <nav class="navbar navbar-expand-md navbar-light">
      <Link to="/" class="navbar-brand fontstyle-title fontcolor-main">
        LIZZIE ADELA STUDIO
      </Link>
      <button
        type="button"
        class="navbar-toggler navbar-toggler-sm"
        data-toggle="collapse"
        data-target="#navbarCollapse"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav">
          <Link to="/" class="nav-item nav-link fontstyle-title">
            Home
          </Link>
        </div>
        <div class="navbar-nav">
          <Link to="shop" class="nav-item nav-link fontstyle-title">
            Shop
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
