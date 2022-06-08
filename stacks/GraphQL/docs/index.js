var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

const persons = [
  { id: 1, name: 'Kim', age: 15 },
  { id: 2, name: 'Park', age: 25 },
  { id: 3, name: 'Lee', age: 35 },
];

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  query HeroForEpisode($ep: Person!){
    hero(episode: $ep){
      name
    }
  }

  type Query {
    hello: String
    persons: [Person]!
  }

  type Person {
    id: ID
    name: String
    age: Int
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello world!';
  },
  persons: () => persons,
};

var app = express();
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');
