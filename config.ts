import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export const API_KEY: string = process.env.API_KEY || '';
export const NODE_ENV: string = process.env.NODE_ENV || 'development';

export const PORT: number = parseInt(process.env.PORT || '8080', 10);
export const DATABASE_URL: string = process.env.DATABASE_URL;
