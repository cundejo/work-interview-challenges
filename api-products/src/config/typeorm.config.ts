import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as config from 'config';

const dbConfig = config.get('db');

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: dbConfig.type,
  host: process.env.PGHOST || dbConfig.host,
  port: process.env.PGPORT || dbConfig.port,
  username: process.env.PGUSER || dbConfig.username,
  password: process.env.PGPASSWORD || dbConfig.password,
  database: process.env.PGDATABASE || dbConfig.database,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: process.env.TYPEORM_SYNC || dbConfig.synchronize,
};
