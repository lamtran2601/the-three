import { DBSchema, schema } from '@drizzle';
import { Module } from '@nestjs/common';
import { buildSchema } from 'drizzle-graphql';
import { DBModule } from 'modules/db';
import { GqlModule } from 'modules/gql';

@Module({
  imports: [
    DBModule.registerAsync({
      config: {
        schema,
      },
    }),
    GqlModule.forRootAsync({
      inject: ['DB'],
      useFactory: async (db: DBSchema) => ({
        path: '/graphql',
        graphiql: true,
        transformSchema: () => buildSchema(db).schema,
        transformAutoSchemaFile: true,
      }),
    }),
  ],
})
export class AppModule {}
