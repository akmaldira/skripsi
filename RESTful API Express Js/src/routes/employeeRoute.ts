import { Router } from "express";
import EmployeeController from "../controllers/employeeController";

class EmployeeRoute {
  public path: string;
  public router = Router();
  public controller = new EmployeeController();

  constructor(path: string) {
    this.path = path;
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get(`${this.path}/all`, this.controller.getEmployee);
    this.router.get(`${this.path}/half`, this.controller.getEmployeeHalf);
  }
}

export default EmployeeRoute;
