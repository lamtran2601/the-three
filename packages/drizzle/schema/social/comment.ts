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
import { post } from 'schema/social/post';

export const comment = pgTable('comment', {
  id: serial('id').primaryKey(),
  content: text('content'),
  data: json('data'),
  createdAt: date('created_at').defaultNow(),
  updatedAt: date('updated_at').defaultNow(),
  authorId: integer('author_id'),
  postId: integer('post_id'),
  parentId: integer('parent_id'),
});

export const commentRelations = relations(comment, ({ one, many }) => ({
  createdBy: one(user, {
    fields: [comment.authorId],
    references: [user.id],
    relationName: 'createdBy',
  }),
  post: one(post, {
    fields: [comment.postId],
    references: [post.id],
  }),
  parent: one(comment, {
    fields: [comment.parentId],
    references: [comment.id],
    relationName: 'parent',
  }),
  children: many(comment, {
    relationName: 'parent',
  }),
}));

export const userCommentRelations = relations(user, ({ many }) => ({
  createdComments: many(comment, {
    relationName: 'createdBy',
  }),
}));
