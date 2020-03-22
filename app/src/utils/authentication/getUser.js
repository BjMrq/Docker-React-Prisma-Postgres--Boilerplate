import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../../config';

const getUserIdFromRequest = (request, requireAuth = true) => {

  const authorizationHeader = request.request ?
    request.request.headers.authorization :
    request.connection.context.Authorization;

  if (authorizationHeader) {

    const token = authorizationHeader.replace('Bearer ', '');

    try {

      const decoded = jwt.verify(token, JWT_SECRET);

      return decoded.userId;

    } catch {

      throw new Error('Authentication failed');

    }

  }

  if (requireAuth) {

    throw new Error('Authentication required');

  }

  return null;

};


const getUserFromEmail = async (db, email) => {

  try {

    const user = await db.query.user({ where: { email } });

    if (user) {

      return user;

    }

    throw new Error('Could not find user');

  } catch {

    throw new Error('Could not fetch the database');

  }


};

export { getUserIdFromRequest, getUserFromEmail };
