import React from "react";
// import PayPalBtn from "./PayPalBtn.jsx";
// import * as api from "../utils/api.js";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import { connect } from "react-redux";
import { addToCart } from "./actions/cartActions.js";
import { Link } from "@reach/router";

import Loading from "./Loading";
import Error from "./Error";

const GET_ITEM_DETAIL = gql`
  query itemById($ID: ID!) {
    item(where: { id: $ID }) {
      name
      description
      price
      id
      category
      metal
      hero {
        url
      }
      images {
        url
      }
    }
  }
`;

const Itempage = ({ item_id, addToCart }) => (
  // const paymentHandler = (details, data) => {
  //   /** Here you can call your backend API
  //     endpoint and update the database */
  //   console.log(details, data);
  // };

  <Query query={GET_ITEM_DETAIL} variables={{ ID: item_id }}>
    {({ loading, error, data }) => {
      if (loading) return <Loading />;
      if (error || data.item === null) return <Error />;

      const addItemToCart = (item) => {
        addToCart(item);
        // const items = parseInt(localStorage.getItem("items"));
        // const newItems = items + 1;
        // localStorage.setItem("items", newItems);
      };

      return (
        <div class="container justify-content-center text-right px-3">
          <nav aria-label="breadcrumb  ">
            <ol class="bg-transparent breadcrumb px-0 mx-0 fontsize-sm">
              <li class="breadcrumb-item">
                <Link to="/shop">
                  <p class="fontcolor-main fontstyle-content fontsize-sm">
                    shop
                  </p>
                </Link>
              </li>
              <li class="breadcrumb-item">
                <Link to={`/shop/${data.item.category}`}>
                  <p class="fontcolor-main fontstyle-content fontsize-sm">
                    {data.item.category}
                  </p>
                </Link>
              </li>
              <li class="breadcrumb-item">
                <p class="text-dark fontstyle-content fontsize-sm">
                  {data.item.name.toLowerCase()}
                </p>
              </li>
            </ol>
          </nav>
          <div class="row">
            <div class="col-12 col-md-6">
              <img
                src={data.item.hero.url}
                class="img-fluid fade-in"
                alt={data.item.name}
              ></img>
              <div class="py-4">
                <p class="fontstyle-title lead text-dark">{data.item.name}</p>
                <p class="fontstyle-content text-dark">
                  £{data.item.price.toFixed(2)}
                </p>
                <p class="fontstyle-content text-dark">
                  {data.item.description}
                </p>
                <p class="fontstyle-content text-dark">
                  Metal: {data.item.metal}
                </p>
                <button
                  onClick={() => addItemToCart(data.item)}
                  class="btn btn-dark btn-md align-middle fontstyle-title my-2"
                >
                  add to cart
                </button>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div id="myCarousel" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                  <li
                    data-target="#myCarousel"
                    data-slide-to="0"
                    class="active"
                  ></li>
                  {data.item.images.slice(1).map((item, i) => (
                    <li
                      key={i}
                      data-target="#myCarousel"
                      data-slide-to={i}
                    ></li>
                  ))}
                </ol>

                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      src={data.item.images[0].url}
                      class="img-fluid"
                      alt="First Slide"
                    />
                  </div>
                  {data.item.images.slice(1).map((image) => {
                    return (
                      <div key={image.url} class="carousel-item">
                        <img
                          class="img-fluid"
                          src={image.url}
                          alt={data.item.name}
                        />
                      </div>
                    );
                  })}
                </div>

                <a
                  class="carousel-control-prev"
                  href="#myCarousel"
                  data-slide="prev"
                >
                  <span class="carousel-control-prev-icon"></span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#myCarousel"
                  data-slide="next"
                >
                  <span class="carousel-control-next-icon"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    }}
  </Query>
);

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) => {
      dispatch(addToCart(item));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Itempage);
