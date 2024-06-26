import { relations } from 'drizzle-orm';
import {
  date,
  integer,
  json,
  pgTable,
  serial,
  text,
} from 'drizzle-orm/pg-core';
import { user } from 'schema/shared';
import { comment } from 'schema/social/comment';

export const post = pgTable('post', {
  id: serial('id').primaryKey(),
  content: text('content'),
  data: json('data'),
  createdAt: date('created_at').defaultNow(),
  updatedAt: date('updated_at').defaultNow(),
  authorId: integer('author_id'),
  parentId: integer('parent_id'),
});

export const postRelations = relations(post, ({ one, many }) => ({
  createdBy: one(user, {
    fields: [post.authorId],
    references: [user.id],
    relationName: 'createdBy',
  }),
  parent: one(post, {
    fields: [post.parentId],
    references: [post.id],
  }),
  comments: many(comment),
}));

export const userPostRelations = relations(user, ({ many }) => ({
  createdPosts: many(post, {
    relationName: 'createdBy',
  }),
}));
