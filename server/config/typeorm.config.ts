import { ConnectionOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import path from 'path';

const DATABASE_TYPE = 'postgres';
export const ormconfig: ConnectionOptions = {
  name: 'default',
  type: DATABASE_TYPE,
  ...(process.env.DATABASE_URL
    ? { url: process.env.DATABASE_URL }
    : {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
      }),
  synchronize: true,
  logging: process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test', // in dev : 1 && 1 = 1
  entities: [path.join(__dirname, '/../modules/**/*.entity.{js,ts}')],
  namingStrategy: new SnakeNamingStrategy(),
};
