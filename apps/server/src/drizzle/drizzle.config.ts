import { Env } from '@/env';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'postgresql',
  schema: 'schema/index.ts',
  out: 'migrations',
  dbCredentials: {
    url: Env.DATABASE_URL,
  },
});
