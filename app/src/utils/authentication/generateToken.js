import { JWT_SECRET } from '../../config';
import jwt from 'jsonwebtoken';

const generateToken = userId => jwt.sign({ userId }, JWT_SECRET, { expiresIn: '7 days' });

export { generateToken as default };
