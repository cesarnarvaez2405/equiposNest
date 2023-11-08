import { Module } from '@nestjs/common';
import { databaseProviders } from '../config/configOrm.providers';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
