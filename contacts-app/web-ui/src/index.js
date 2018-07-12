import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ApolloProvider } from "react-apollo";

import { createApolloClient } from "./store";
const client = createApolloClient();

(async () => {
  ReactDOM.render(
        <ApolloProvider client={client}>
            <App/>
        </ApolloProvider>,
    document.getElementById("root")
  );
})();
