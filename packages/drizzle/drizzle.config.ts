require('dotenv').config({ path: ['../../.env'] });
import { defineConfig } from 'drizzle-kit';
import { env } from 'process';

export default defineConfig({
  dialect: 'postgresql',
  schema: 'schema/index.ts',
  out: 'migrations',
  dbCredentials: {
    url: env.DATABASE_URL,
  },
});
