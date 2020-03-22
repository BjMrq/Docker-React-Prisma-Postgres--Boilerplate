import { GraphQLServer, PubSub } from 'graphql-yoga';
import { resolvers, fragmentReplacements } from './resolvers/index';
import db from './db';

const pubsub = new PubSub();

const graphqlServer = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context(request) {

    return {
      request,
      pubsub,
      db,
    };

  },
  fragmentReplacements,
  resolverValidationOptions: { requireResolversForResolveType: false, },
});

export { graphqlServer as default };
