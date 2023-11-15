import { Request, Response } from "express";
import { AppDataSource } from "../config/db";
import Employee from "../entities/employee";
import EmployeeRepository from "../repositories/employeeRepositories";
const ormconfig = require("../../ormconfig");

class EmployeeController {
  private employeeRepository: EmployeeRepository;

  constructor() {
    this.employeeRepository = new EmployeeRepository(
      Employee,
      AppDataSource.manager,
      AppDataSource.manager.queryRunner
    );
  }

  public getEmployee = async (req: Request, res: Response): Promise<void> => {
    const { row } = req.query;

    const employees = await this.employeeRepository.query(`SELECT * FROM employee LIMIT ${row}`)

    res.status(200).send(employees);
  };

  public getEmployeeHalf = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    const { row } = req.query;
    const employees = await this.employeeRepository.query(`SELECT employee_id, first_name, last_name, email, gender, date_of_birth FROM employee LIMIT ${row}`);

    res.status(200).send(employees);
  };
}

export default EmployeeController;
