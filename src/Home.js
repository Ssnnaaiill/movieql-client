import React from "react";
import styled from "styled-components";
import { Query } from "react-apollo";
import { HOME_PAGE } from "./queries";
import Movie from "./Movie";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

/**
 * @description
 * You should give a children function to the query component.
 * This is called a render prop.
 */

const Home = () => (
  <Container>
    <Query query={HOME_PAGE}>
      {({ loading, data, error }) => {
        if (loading) return "Loading...";
        if (error) return "Something Happened!";
        return data.movies.map(movie => (
          <Movie
            id={movie.id}
            key={movie.id}
            poster={movie.medium_cover_image}
            title={movie.title}
            rating={movie.rating}
          />
        ));
      }}
    </Query>
  </Container>
)

export default Home;
