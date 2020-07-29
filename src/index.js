import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import "bootstrap/dist/css/bootstrap.min.css";
import cartReducer from "./components/reducers/cartReducer";
import { Provider } from "react-redux";
import { createStore } from "redux";

const initState = {
  itemsTotal: 0,
  addedItems: [],
  total: 0,
};

const store = createStore(cartReducer, initState);

const client = new ApolloClient({
  uri:
    "https://api-eu-central-1.graphcms.com/v2/ckd4fe3ka0si801xmeaucehnf/master",
});

const AppComponent = () => <App />;

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <AppComponent />
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
