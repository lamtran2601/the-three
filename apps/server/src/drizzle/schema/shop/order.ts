import { baseColumns } from '@/drizzle/utils/base.columns';
import { relations } from 'drizzle-orm';
import { date, integer, pgTable, serial, text } from 'drizzle-orm/pg-core';
import { user } from '../shared/user';
import { product } from './product';

export const order = pgTable('order', {
  ...baseColumns,
  // custom fields
  status: text('status'),
  total: integer('total'),
  // foreign keys
  userId: integer('user_id'),
});

export const orderRelations = relations(order, ({ one }) => ({
  user: one(user, {
    fields: [order.userId],
    references: [user.id],
  }),
}));

export const orderItem = pgTable('order_item', {
  // base fields
  id: serial('id').primaryKey(),
  createdAt: date('created_at').defaultNow(),
  updatedAt: date('updated_at').defaultNow(),
  // custom fields
  quantity: integer('quantity'),
  price: integer('price'),
  // foreign keys
  orderId: integer('order_id'),
  productId: integer('product_id'),
});

export const orderItemRelations = relations(orderItem, ({ one }) => ({
  order: one(order, {
    fields: [orderItem.orderId],
    references: [order.id],
  }),
  product: one(product, {
    fields: [orderItem.productId],
    references: [product.id],
  }),
}));
