import { pgTable, text } from 'drizzle-orm/pg-core';
import { baseColumns } from '@/drizzle/utils/base.columns';

export const category = pgTable('category', {
  ...baseColumns,
  // custom fields
  name: text('name'),
  description: text('description'),
  image: text('image'),
});
