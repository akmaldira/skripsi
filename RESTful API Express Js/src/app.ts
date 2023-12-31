import cors from "cors";
import dotenv from "dotenv";
import express, { Application } from "express";
import { AppDataSource } from "./config/db";

class App {
  public app: Application;
  public port: number;

  constructor(routes: any[]) {
    this.app = express();
    this.port = 5000;
    dotenv.config();
    console.log("App initializing...");
    this.connectToDatabase();
    this.initializeMiddlewares();
    this.initializeRoutes(routes);
  }

  public listen(): void {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }

  private connectToDatabase(): void {
    AppDataSource.initialize()
      .then((res) =>
        console.log(
          `Using Database: ${process.env.DB_NAME} on ${process.env.DB_HOST}:${process.env.DB_PORT} with user: ${process.env.DB_USER}`
        )
      )
      .catch((err: any) => console.log("Database error", err));
  }

  private initializeMiddlewares(): void {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private initializeRoutes(routes: any[]): void {
    routes.forEach((route) => {
      this.app.use("/", route.router);
    });
  }
}

export default App;
