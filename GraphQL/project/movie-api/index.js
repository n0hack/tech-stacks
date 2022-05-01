import { createServer } from '@graphql-yoga/node';
import typeDefs from './graphql/schema';
import resolvers from './graphql/resolvers';

const server = createServer({
  schema: { typeDefs, resolvers },
});

server.start();
