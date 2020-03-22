import UserQuery from './User/UserQuery';
import { forwardTo } from 'prisma-binding';


const Query = {
  ...UserQuery,
};

export { Query as default };
