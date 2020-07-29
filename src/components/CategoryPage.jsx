import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import { Link } from "@reach/router";

import Loading from "./Loading";
import Error from "./Error";

const GET_ITEMS = gql`
  query items($category: Category!) {
    items(orderBy: name_DESC, where: { category: $category }) {
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
    __type(name: "Category") {
      name
      enumValues {
        name
      }
    }
  }
`;

const CategoryPage = ({ category }) => (
  <Query query={GET_ITEMS} variables={{ category: category }}>
    {({ loading, error, data }) => {
      if (loading) return <Loading />;
      if (error) return <Error />;
      return (
        <div class="container justify-content-center text-center px-3">
          <nav aria-label="breadcrumb">
            <ol class="bg-transparent breadcrumb px-0 mx-0 fontsize-sm">
              <li class="breadcrumb-item">
                <Link to="/shop">
                  <p class="fontcolor-main fontstyle-content fontsize-sm">
                    shop
                  </p>
                </Link>
              </li>
              <li class="breadcrumb-item">
                <p class="text-dark fontstyle-content fontsize-sm">
                  {category}
                </p>
              </li>
            </ol>
          </nav>
          <nav aria-label="categories" class="mx-0 px-0 py-0 my-0">
            <ol class="bg-transparent px-0 mx-0 fontsize-sm d-flex flex-direction-row list-unstyled py-0 my-0">
              {data.__type.enumValues.map((category) => {
                return (
                  <li class="mr-1 pr-1" key={category.name}>
                    <Link to={`/shop/${category.name}`}>
                      <p class="text-dark fontstyle-content fontsize-sm">
                        {category.name}
                      </p>
                    </Link>
                  </li>
                );
              })}
            </ol>
          </nav>
          <div class="row">
            {data.items.map((item) => {
              return (
                <Link
                  to={`/shop/${item.category}/${item.id}`}
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
        </div>
      );
    }}
  </Query>
);

export default CategoryPage;
