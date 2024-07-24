require('dotenv').config({ path: ['../../.env'] });
import { env } from 'process';

export const Env = {
  DATABASE_URL:
    env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/postgres',
};
