import React from "react";
import { Link } from "@reach/router";
import { connect } from "react-redux";

const SubNav = ({ itemsTotal, addedItems }) => {
  return (
    <div class="bg-dark container-fluid d-flex flex-direction-row justify-content-end align-items-center py-1">
      <div class="dropdown text-light">
        <div
          class="dropdown-toggle d-flex flex-direction-row justify-content-end align-items-center"
          data-toggle="dropdown"
        >
          <i class="text-light fa fa-shopping-cart"></i>
          <p class="text-light fontstyle-title my-0 mx-1">{itemsTotal}</p>
        </div>
        <div class="dropdown-menu dropdown-menu-right list-unstyled">
          {itemsTotal === 0 ? (
            <div>
              <h3 class="fontstyle-content fontsize-sm px-2 py-2 my-0">
                your cart is empty
              </h3>
              <Link to="/cart" class="dropdown-item px-2 py-2">
                <p class="text-dark fontstyle-title fontsize-sm my-0 px-0">
                  view cart
                </p>
              </Link>
            </div>
          ) : (
            <ul class="list-unstyled">
              {addedItems.map((item) => {
                return (
                  <li class="border-bottom mx-2 my-2" key={item.id}>
                    <Link to={`/shop/${item.category}/${item.id}`}>
                      <img
                        src={item.hero.url}
                        class="img-fluid fade-in"
                        alt={item.name}
                      ></img>
                    </Link>

                    <div class="container-fluid text-left px-0 py-2">
                      <p class="fontstyle-title fontsize-sm my-0">
                        {item.name}
                      </p>
                      <p class="fontstyle-content fontsize-sm my-0">
                        £{item.price.toFixed(2)}
                      </p>
                      <p class="fontstyle-content fontsize-sm my-0">
                        Quantity: {item.quantity}
                      </p>
                    </div>
                  </li>
                );
              })}
              <li class="dropdown-item px-2 py-2">
                <Link to="/cart">
                  <p class="text-dark fontstyle-title fontsize-sm my-0 px-0">
                    view cart
                  </p>
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    itemsTotal: state.itemsTotal,
    addedItems: state.addedItems,
  };
};

export default connect(mapStateToProps)(SubNav);
