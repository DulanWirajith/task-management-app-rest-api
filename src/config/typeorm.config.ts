import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import 'dotenv/config';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: process.env.password.toString(),
  database: 'taskmanagement',
  /* eslint-disable */
  // entities -> used to translate tables into databse. these are stored in files.  so we schould say to typeorm which files they are
  entities: ['dist/src/**/*.entity.js'],
  // you can synchronize entities with a database, so there is no need for migirations in development. but this feature not good for production
  synchronize: false,
  // migrations: ['dist/src/db/migrations/*.js'],
  // cli: {
  //   migrationsDir: 'src/db/migrations/',
  // },
};
