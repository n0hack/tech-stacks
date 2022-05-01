const typeDefs = `
  type Query {
    movies(limit: Int, rating: Float): [Movie]!
    movie(id: Int!): Movie!
    suggestions(id: Int!): [Movie]!
  }

  type Movie {
    id: Int!
    title: String!
    rating: Float!
    Summary: String!
    language: String!
    medium_cover_image: String!
  }
`;

export default typeDefs;
