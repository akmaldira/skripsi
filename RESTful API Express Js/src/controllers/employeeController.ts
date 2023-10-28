import { Request, Response } from "express";
import { Pool } from "pg";
const ormconfig = require("../../ormconfig");

class EmployeeController {
  private client: Pool;
  constructor() {
    this.client =  new Pool({
      host: ormconfig.host,
      port: ormconfig.port,
      user: ormconfig.username,
      password: ormconfig.password,
      database: ormconfig.database,
    })
    this.client.connect();
  }

  public getEmployee = async (req: Request, res: Response): Promise<void> => {
    const { row } = req.query;

    const employees = await this.client.query(`SELECT * FROM employee LIMIT ${row}`)

    res.status(200).send(employees.rows);
  };

  public getEmployeeHalf = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    const { row } = req.query;
    const employees = await this.client.query(`SELECT employee_id, first_name, last_name, email, gender, date_of_birth FROM employee LIMIT ${row}`);

    res.status(200).send(employees.rows);
  };
}

export default EmployeeController;
