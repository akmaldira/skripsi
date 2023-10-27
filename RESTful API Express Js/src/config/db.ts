import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "akmaldira",
  password: "Akmaldira123",
  database: "kuliah",
  synchronize: false,
  logging: false,
  entities: [
    process.env.NODE_ENV === "production"
      ? "./dist/entities/*.js"
      : "./src/entities/*.ts",
  ],
});
