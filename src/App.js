import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
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
          <ApolloHooksProvider client={client}>
            <Router>
              <main>
                <Route exact={true} path={"/"} component={Home} />
                <Route path={"/details/:movieId"} component={Detail} />
              </main>
            </Router>
          </ApolloHooksProvider>
        </ApolloProvider>
      </>
    );
  }
}

export default App;