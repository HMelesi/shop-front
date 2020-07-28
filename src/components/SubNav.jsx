import React from "react";
import { Link } from "@reach/router";
// import { Link } from "@reach/router";

const SubNav = ({ itemNumber, setItemNumber }) => {
  return (
    <div class="bg-dark container-fluid d-flex flex-direction-row justify-content-end align-items-center py-1">
      <Link to="/cart">
        <i class="text-light fa fa-shopping-cart"></i>
      </Link>
      <p class="text-light fontstyle-title my-0 mx-1">
        {localStorage.getItem("items")}
      </p>
    </div>
  );
};

export default SubNav;
