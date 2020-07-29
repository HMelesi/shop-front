import React from "react";
import { Link } from "@reach/router";

const Error = () => {
  return (
    <div class="container text-center py-5 px-5">
      <h2 class="fontstyle-title text-dark lead py-5">
        Sorry, there's an error.
      </h2>
      <Link
        to="/"
        class="btn btn-dark btn-md align-middle fontstyle-title my-2"
      >
        return home
      </Link>
    </div>
  );
};

export default Error;
