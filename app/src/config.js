import dotenv from 'dotenv';

dotenv.config();

export const APP_NAME        = process.env.APP_NAME;
export const ENV             = process.env.NODE_ENV;
export const PORT            = process.env.PORT || 5000;
export const DB_USER         = process.env.DB_USER;
export const DB_PASSWORD     = process.env.DB_PASSWORD;
export const PRISMA_ENDPOINT = process.env.PRISMA_ENDPOINT;
export const PRISMA_SECRET   = process.env.PRISMA_SECRET;
export const JWT_SECRET      = process.env.JWT_SECRET;
