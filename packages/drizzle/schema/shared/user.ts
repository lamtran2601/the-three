import { baseColumns } from 'utils/base.columns';
import { pgTable, serial, text } from 'drizzle-orm/pg-core';

export const user = pgTable(
  'user',
  {
    ...baseColumns,
    id: serial('id').primaryKey(),
    name: text('name'),
    email: text('email'),
  },
  (_user) => ({}),
);
