import { DrizzlePostgresModule } from '@knaadh/nestjs-drizzle-postgres';
import { DynamicModule, Module } from '@nestjs/common';
import { Env } from '@shared';
import { DrizzleConfig } from 'drizzle-orm';

@Module({})
export class DBModule {
  public static registerAsync({
    config,
  }: {
    config?: DrizzleConfig<any>;
  }): DynamicModule {
    return {
      module: DBModule,
      imports: [
        DrizzlePostgresModule.registerAsync({
          tag: 'DB',
          useFactory: () => ({
            postgres: {
              url: Env.DATABASE_URL,
            },
            config,
          }),
        }),
      ],
    };
  }
}
