import { Repository } from "typeorm";
import Employee from "../entities/employee";

class EmployeeRepository extends Repository<Employee> {}

export default EmployeeRepository;
