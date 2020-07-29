import React from "react";
import { connect } from "react-redux";
import { Link } from "@reach/router";

const ShoppingCart = ({ addedItems, total }) => {
  return (
    <div class="container text-center py-5 px-5">
      {/* <h3 class="fontstyle-content text-dark lead text-left">Your cart:</h3> */}
      <ul class="container">
        {addedItems.map((item) => {
          return (
            <li class="row border-top py-3" key={item.id}>
              <div class=" col-4">
                <Link to={`/shop/${item.id}`}>
                  <img
                    src={item.hero.url}
                    class="img-fluid fade-in"
                    alt={item.name}
                  ></img>
                </Link>
              </div>
              <div class="container-fluid col-8">
                <p class="fontstyle-title text-left">{item.name}</p>
                <p class="fontstyle-content text-left">
                  £{item.price.toFixed(2)}
                </p>
                <p class="fontstyle-content text-left">
                  Quantity: {item.quantity}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
      <div class="container border-top py-3">
        <h3 class="fontstyle-title text-dark lead text-left">
          Total: £{total.toFixed(2)}
        </h3>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    addedItems: state.addedItems,
    total: state.total,
  };
};

export default connect(mapStateToProps)(ShoppingCart);
