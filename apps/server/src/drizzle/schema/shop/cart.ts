import { product } from './product';
import { relations } from 'drizzle-orm';
import { integer, pgTable } from 'drizzle-orm/pg-core';
import { user } from '../shared/user';
import { baseColumns } from '@/drizzle/utils/base.columns';

export const cart = pgTable('cart', {
  ...baseColumns,
  // custom fields
  quantity: integer('quantity'),
  // foreign keys
  userId: integer('user_id'),
  productId: integer('product_id'),
});

export const cartRelations = relations(cart, ({ one }) => ({
  user: one(user, {
    fields: [cart.userId],
    references: [user.id],
  }),
  product: one(product, {
    fields: [cart.productId],
    references: [product.id],
  }),
}));
