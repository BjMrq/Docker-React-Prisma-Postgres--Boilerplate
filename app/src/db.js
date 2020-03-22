
import { Prisma } from 'prisma-binding';
import { PRISMA_ENDPOINT, PRISMA_SECRET } from './config';
import { fragmentReplacements } from './resolvers/index';

const db = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: PRISMA_ENDPOINT,
  secret  : PRISMA_SECRET,
  fragmentReplacements
});

export { db as default };
