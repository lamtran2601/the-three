import { Env } from 'src/env';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'postgresql',
  schema: 'src/drizzle/schema/index.ts',
  out: 'src/drizzle/migrations',
  dbCredentials: {
    url: Env.DATABASE_URL,
  },
});
