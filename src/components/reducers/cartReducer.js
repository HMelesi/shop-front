// import { ADD_TO_CART } from "../actions/action-types/cart-actions";
import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";

const initState = {
  items: [],
  addedItems: [],
  total: 0,
};

const client = new ApolloClient({
  uri:
    "https://api-eu-central-1.graphcms.com/v2/ckd4fe3ka0si801xmeaucehnf/master",
});

const cartReducer = (state = initState, action) => {
  if (action.type === "ADD_TO_CART") {
    let addedItemId = action.id;

    client
      .query({
        query: gql`
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
        `,
        variables: { ID: addedItemId },
      })
      .then((response) => {
        let addedItem = response.data.item;
        let existed_item = state.addedItems.find(
          (item) => action.id === item.id
        );
        if (existed_item) {
          addedItem.quantity += 1;
          return {
            ...state,
            total: state.total + addedItem.price,
          };
        } else {
          addedItem.quantity = 1;
          //calculating the total
          let newTotal = state.total + addedItem.price;

          return {
            ...state,
            addedItems: [...state.addedItems, addedItem],
            total: newTotal,
          };
        }
      });
  } else {
    return state;
  }
};
export default cartReducer;
