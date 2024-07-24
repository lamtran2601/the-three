import { PostgresJsDatabase } from 'drizzle-orm/postgres-js';

export type DbService<TSchema extends Record<string, unknown>> =
  PostgresJsDatabase<TSchema>;
