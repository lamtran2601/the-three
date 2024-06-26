import { DynamicModule, Module } from '@nestjs/common';
import { GqlModuleAsyncOptions, GraphQLModule } from '@nestjs/graphql';
import { YogaDriverConfig, YogaDriver } from '@graphql-yoga/nestjs';

@Module({})
export class GqlModule {
  public static forRootAsync(
    options: GqlModuleAsyncOptions<YogaDriverConfig>,
  ): DynamicModule {
    return {
      module: GqlModule,
      imports: [
        GraphQLModule.forRootAsync<YogaDriverConfig>({
          driver: YogaDriver,
          useFactory: async () => ({
            path: '/graphql',
            graphiql: true,
          }),
          ...options,
        }),
      ],
    };
  }
}
