import bcrypt from 'bcryptjs';

const authenticateUser = (user, password) => {

  const isAuthenticated = bcrypt.compareSync(password, user.password);

  if (isAuthenticated) {

    return isAuthenticated;

  }

  throw new Error('Authentication failed');

};

export { authenticateUser as default };
