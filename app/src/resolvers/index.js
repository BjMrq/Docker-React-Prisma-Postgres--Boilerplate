import { extractFragmentReplacements } from 'prisma-binding';
import Query from './Query';
import Mutation from './Mutation';
import User from './User/User';
import Subscription from './Subscription';

const resolvers = {
  Query,
  Mutation,
  // Uncomment if you wish to use subscriptions
  // Subscription,
  User,
};

const fragmentReplacements = extractFragmentReplacements(resolvers);

export { resolvers, fragmentReplacements };
