import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
  resolvers: {
    Movie: {
      isLiked: () => false,
    },
    Mutation: {
      toggleLikeMovie: (_, { id, isLiked }, { cache }) => {
        const myObj = {
          __typename: 'Movie',
          id,
          isLiked,
        };

        cache.modify({
          id: cache.identify(myObj),
          fields: {
            isLiked(cachedName) {
              return !isLiked;
            },
          },
        });

        console.log(myObj);
      },
    },
  },
});

export default client;
