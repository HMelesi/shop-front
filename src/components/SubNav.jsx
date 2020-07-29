import React from "react";
import { Link } from "@reach/router";
import { connect } from "react-redux";

const SubNav = ({ itemsTotal }) => {
  return (
    <div class="bg-dark container-fluid d-flex flex-direction-row justify-content-end align-items-center py-1">
      <Link to="/cart">
        <i class="text-light fa fa-shopping-cart"></i>
      </Link>
      <p class="text-light fontstyle-title my-0 mx-1">{itemsTotal}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    itemsTotal: state.itemsTotal,
  };
};

export default connect(mapStateToProps)(SubNav);
