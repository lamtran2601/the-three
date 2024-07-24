import { date, serial } from 'drizzle-orm/pg-core';

export const baseColumns = {
  id: serial('id').primaryKey(),
  createdAt: date('created_at').defaultNow(),
  updatedAt: date('updated_at').defaultNow(),
};
