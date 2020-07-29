import React from "react";
import { connect } from "react-redux";
import { Link } from "@reach/router";
import { removeFromCart } from "./actions/cartActions.js";

const ShoppingCart = ({ addedItems, total, removeFromCart, itemsTotal }) => {
  const removeItemFromCart = (item) => {
    removeFromCart(item);
  };

  return (
    <div class="container text-center py-5 px-5">
      {itemsTotal === 0 ? (
        <h3 class="fontstyle-content text-dark lead text-left py-3">
          Your cart is empty.
        </h3>
      ) : (
        <div>
          <ul class="container">
            {addedItems.map((item) => {
              return (
                <li class="row border-top py-3" key={item.id}>
                  <div class="col-4">
                    <Link to={`/shop/${item.id}`}>
                      <img
                        src={item.hero.url}
                        class="img-fluid fade-in"
                        alt={item.name}
                      ></img>
                    </Link>
                  </div>
                  <div class="container-fluid col-7 text-left">
                    <p class="fontstyle-title">{item.name}</p>
                    <p class="fontstyle-content">£{item.price.toFixed(2)}</p>
                    <p class="fontstyle-content">Quantity: {item.quantity}</p>
                    <button
                      onClick={() => removeItemFromCart(item)}
                      class="btn btn-dark btn-md align-left fontstyle-title my-2"
                    >
                      <i class="fa fa-trash"></i>
                    </button>
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
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    addedItems: state.addedItems,
    total: state.total,
    itemsTotal: state.itemsTotal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (item) => {
      dispatch(removeFromCart(item));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
