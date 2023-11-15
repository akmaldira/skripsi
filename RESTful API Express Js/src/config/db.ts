import { DataSource, DataSourceOptions } from "typeorm";
const ormconfig = require("../../ormconfig");

export const AppDataSource = new DataSource({
  ...ormconfig,
  pool: {
    max: 10,
    idleTimeout: 600000,
  },
  connectionTimeout: 600000,
} as DataSourceOptions);
