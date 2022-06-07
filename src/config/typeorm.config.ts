import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '',
  database: 'taskmanagement',
  /* eslint-disable */
  // entities -> used to translate tables into databse. these are stored in files.  so we schould say to typeorm which files they are
  entities: [__dirname + '/../**/*.entity.ts'],
  synchronize: true,
};
