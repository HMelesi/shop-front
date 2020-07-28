import React from "react";
import { connect } from "react-redux";
import { Link } from "@reach/router";

const ShoppingCart = ({ items }) => {
  return (
    <div class="container text-center py-5 px-5">
      <h2 class="fontstyle-title text-dark lead text-center py-5">
        Shopping cart page!
      </h2>
      {items.map((item) => {
        return (
          <li className="collection-item avatar" key={item.id}>
            <div className="item-img">
              <img src={item.img} alt={item.img} className="" />
            </div>

            <div className="item-desc">
              <span className="title">{item.title}</span>
              <p>{item.desc}</p>
              <p>
                <b>Price: {item.price}$</b>
              </p>
              <p>
                <b>Quantity: {item.quantity}</b>
              </p>
              <div className="add-remove">
                <Link to="/cart">
                  <i className="material-icons">arrow_drop_up</i>
                </Link>
                <Link to="/cart">
                  <i className="material-icons">arrow_drop_down</i>
                </Link>
              </div>
              <button className="waves-effect waves-light btn pink remove">
                Remove
              </button>
            </div>
          </li>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.addedItems,
  };
};

export default connect(mapStateToProps)(ShoppingCart);
