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
      genres
      rating
    }
  }
`;