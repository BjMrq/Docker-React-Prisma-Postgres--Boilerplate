import bcrypt from 'bcryptjs';
import authenticateUser from '../../utils/authentication/authenticateUser';
import { getUserIdFromRequest, getUserFromEmail } from '../../utils/authentication/getUser';
import generateToken from '../../utils/authentication/generateToken';
import hashPassword from '../../utils/authentication/hashPassword';

const UserMutation = {
  async createUser(parent, args, { db }) {

    const hashedPassword = await hashPassword(args.data.password);

    try {

      const user = await db.mutation.createUser({
        data: {
          ...args.data,
          password: hashedPassword
        }
      });

      return {
        user,
        token: generateToken(user.id)
      };

    } catch (error) {

      throw new Error('The user could not be saved in the database');

    }

  },
  async logInUser(parent, args, { db }) {

    const user = await getUserFromEmail(db, args.data.email);

    authenticateUser(user, args.data.password);

    try {

      return {
        user,
        token: generateToken(user.id)
      };

    } catch {

      throw new Error('Could not return a token');

    }

  },
  deleteUser(parent, args, { db, request }, info) {

    const userId = getUserIdFromRequest(request);

    try {

      return db.mutation.deleteUser({ where: { id: userId } }, info);

    } catch (error) {

      throw new Error('The user could not be deleted');

    }

  },
  async updateUser(parent, args, { db, request }, info) {

    const userId = getUserIdFromRequest(request);

    const hashedPassword = await hashPassword(args.data.password);

    try {

      return db.mutation.updateUser({
        where   : { id: userId },
        data    : args.data,
        password: hashedPassword
      }, info);

    } catch (error) {

      throw new Error('The user could not be updated');

    }

  }
};

export { UserMutation as default };
