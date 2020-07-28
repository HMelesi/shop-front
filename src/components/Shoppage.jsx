import React from "react";
// import PayPalBtn from "./PayPalBtn.jsx";
// import * as api from "../utils/api.js";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import { Link } from "@reach/router";

import Loading from "./Loading";
import Error from "./Error";

const GET_ITEMS = gql`
  query items {
    items(orderBy: name_DESC) {
      name
      description
      id
      price
      category
      metal
      hero {
        url
      }
    }
  }
`;

const Shoppage = () => (
  // const paymentHandler = (details, data) => {
  //   /** Here you can call your backend API
  //     endpoint and update the database */
  //   console.log(details, data);
  // };
  <Query query={GET_ITEMS}>
    {({ loading, error, data }) => {
      if (loading) return <Loading />;
      if (error) return <Error />;
      return (
        <div class="container justify-content-center text-center py-5 px-3">
          {/* <h2 class="fontstyle-title text-dark fontsize-lg text-center">
            This is the shop page!
          </h2> */}
          <div class="row">
            {data.items.map((item) => {
              return (
                <Link
                  to={`/shop/${item.id}`}
                  class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 fade-in"
                  key={item.id}
                >
                  <img
                    src={item.hero.url}
                    class="img-fluid "
                    alt={item.name}
                  ></img>
                  <p class="fontstyle-content text-dark">{item.name}</p>
                  <p class="fontstyle-content text-dark">
                    £{item.price.toFixed(2)}
                  </p>
                </Link>
              );
            })}
          </div>
          {/* <PayPalBtn
        amount={10}
        currency={"USD"}
        onSuccess={() => paymentHandler}
      /> */}
          {/* <button onClick={() => api.getAuthToken()}></button> */}
        </div>
      );
    }}
  </Query>
);

export default Shoppage;
