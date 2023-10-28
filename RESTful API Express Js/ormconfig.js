const NODE_ENV = process.env.NODE_ENV || "development";
require("dotenv").config(NODE_ENV === "production" ? { path: ".env" } : { path: ".env.development"});

module.exports = {
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "Akmaldira123",
  database: process.env.DB_NAME || "kuliah",
  synchronize: false,
  logging: false,
  entities: [
    NODE_ENV === "production"
      ? "./dist/entities/*.js"
      : "./src/entities/*.ts",
  ],
  ssl: false,
};
