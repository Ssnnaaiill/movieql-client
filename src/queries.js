import gql from "graphql-tag";

/**
 * @description
 * graphql-tag is the way that we can write GraphQL on the frontend.
 */

// query is now a GraphQL syntax tree object
export const HOME_PAGE = gql`
  {
    movies(limit: 50, rating: 7) {
      id
      title
      rating
      medium_cover_image
    }
  }
`;

/**
 * @description
 * getMovieDetails: This is a query for Apollo.
 * movie: This is a query for the GraphQL server.
 */

export const MOVIE_DETAILS = gql`
  query getMovieDetails($movieId: Int!) {
    movie(id: $movieId) {
      medium_cover_image
      title
      rating
      description_intro
      language
      genres
    }
    suggestions(id: $movieId) {
      id
      title
      rating
      medium_cover_image
    }
  }
`;