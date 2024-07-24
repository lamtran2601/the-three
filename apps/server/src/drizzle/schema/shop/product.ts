import { relations } from 'drizzle-orm';
import { integer, pgTable, text } from 'drizzle-orm/pg-core';
import { category } from './category';
import { brand } from './brand';
import { baseColumns } from '@/drizzle/utils/base.columns';

// product schema
export const product = pgTable('product', {
  ...baseColumns,
  // custom fields
  name: text('name'),
  price: integer('price'),
  description: text('description'),
  image: text('image'),
  rating: integer('rating'),
  // foreign keys
  categoryId: integer('category_id'),
  brandId: integer('brand_id'),
});

// product relations
export const productRelations = relations(product, ({ one }) => ({
  category: one(category, {
    fields: [product.categoryId],
    references: [category.id],
  }),
  brand: one(brand, {
    fields: [product.brandId],
    references: [brand.id],
  }),
}));
