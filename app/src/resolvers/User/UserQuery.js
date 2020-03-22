import { getUserIdFromRequest } from '../../utils/authentication/getUser';

const UserQuery = {
  users(parent, args, { db }, info) {

    const opArgs = { ...args };

    if (args.query) {

      opArgs.where = { OR: [ { name_contains: args.query } ] };

    }

    return db.query.users(opArgs, info);

  },
  async currentUser(parent, args, { db, request }, info) {

    const userId = getUserIdFromRequest(request);

    try {

      return await db.query.user(
        { where: { id: userId } }, info);

    } catch {

      throw new Error('Could not fetch the user');

    }

  }
};

export { UserQuery as default };
