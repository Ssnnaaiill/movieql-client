import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import client from "./client";
import Home from "./Home";
import Detail from "./Detail";
import { GlobalStyle } from "./globalStyles";

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <ApolloProvider client={client}>
          <Router>
            <Route exact={true} path={"/"} component={Home} />
            <Route path={"/details/:movieId"} component={Detail} />
          </Router>
        </ApolloProvider>
      </>
    )
  };
}

export default App;
