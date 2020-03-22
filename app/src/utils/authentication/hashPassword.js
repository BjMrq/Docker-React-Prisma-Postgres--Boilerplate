import bcrypt from 'bcryptjs';
import isValidPassword from './passwordValidation';

const hashPassword = (password) => {

  if (isValidPassword(password)) {
    throw new Error('Password must be 8 characters or longer.');

  }

  return bcrypt.hash(password, 15);

};

export { hashPassword as default };
