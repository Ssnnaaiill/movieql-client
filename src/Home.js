import React from "react";
import { Query } from "react-apollo";
import { HOME_PAGE } from "./queries";

/**
 * @description
 * You should give a children function to the query component.
 * This is called a render prop.
 */

const Home = () => <Query query={HOME_PAGE}>{({ loading, data, error }) => {
  if (loading) return "loading";
  if (error) return "Something happened!";
  return data.movies.map(movie => (
    <h2 key={movie.id}>
      {movie.title} / {movie.rating}
    </h2>
  ));
}}</Query>

export default Home;
