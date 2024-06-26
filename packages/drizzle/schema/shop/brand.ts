import { pgTable, text } from 'drizzle-orm/pg-core';
import { baseColumns } from 'utils/base.columns';

export const brand = pgTable('brand', {
  ...baseColumns,
  name: text('name'),
  description: text('description'),
  image: text('image'),
});
