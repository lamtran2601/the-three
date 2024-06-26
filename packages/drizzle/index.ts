import { buildSchema } from 'drizzle-graphql';
import * as schema from './schema';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { writeFileSync } from 'fs';
import { printSchema } from 'graphql';

export * as schema from './schema';

const client = postgres(process.env.DATABASE_URL);
export const db = drizzle(client, {
  schema,
});
export type DBSchema = typeof db;
export const gqlSchema = buildSchema(db).schema;
writeFileSync(`schema.graphql`, printSchema(gqlSchema));
