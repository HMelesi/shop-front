import React from "react";
import { Link } from "@reach/router";

const Error = () => {
  return (
    <div class="container text-center py-5 px-5">
      <h2 class="fontstyle-title text-dark lead py-5">
        Sorry, there's an error.
      </h2>
      <Link to="/">
        <p class="fontstyle-title text-dark">Return home.</p>
      </Link>
    </div>
  );
};

export default Error;
