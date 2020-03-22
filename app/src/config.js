import dotenv from 'dotenv';

dotenv.config();

export const APP_NAME        = process.env.APP_NAME;
export const ENV             = process.env.NODE_ENV;
export const PORT            = process.env.PORT || 5000;
export const DB_NAME         = process.env.MONGO_INITDB_DATABASE;
export const DB_URL          = process.env.MONGO_URL;
export const DB_PORT         = process.env.MONGO_PORT;
export const DB_USER         = process.env.DB_USER;
export const DB_PASSWORD     = process.env.DB_PASSWORD;
export const PRISMA_ENDPOINT = process.env.NODE_ENV ? 
  `${process.env.PRISMA_ENDPOINT}/test/test` : process.env.PRISMA_ENDPOINT;
export const PRISMA_SECRET   = process.env.PRISMA_SECRET;
export const JWT_SECRET      = process.env.JWT_SECRET;
