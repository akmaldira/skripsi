import { Request, Response } from "express";
import { AppDataSource } from "../config/db";
import Employee from "../entities/employee";
import EmployeeRepository from "../repositories/employeeRepositories";

class EmployeeController {
  private repository: EmployeeRepository;
  constructor() {
    this.repository = new EmployeeRepository(
      Employee,
      AppDataSource.manager,
      AppDataSource.manager.queryRunner
    );
  }

  public getEmployee = async (req: Request, res: Response): Promise<void> => {
    const { row } = req.query;

    const employees = await this.repository.find({
      take: Number(row),
      order: { employee_id: "ASC" },
    });

    res.status(200).send(employees);
  };

  public getEmployeeHalf = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    const { row } = req.query;
    const employees = await this.repository.find({
      select: [
        "employee_id",
        "first_name",
        "last_name",
        "email",
        "gender",
        "date_of_birth",
      ],
      take: Number(row),
      order: { employee_id: "ASC" },
    });

    res.status(200).send(employees);
  };
}

export default EmployeeController;
