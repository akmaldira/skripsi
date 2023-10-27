import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "employee" })
class Employee {
  @PrimaryGeneratedColumn({ name: "employee_id" })
  employee_id!: number;

  @Column({ name: "first_name" })
  first_name!: string;

  @Column({ name: "last_name" })
  last_name!: string;

  @Column()
  email!: string;

  @Column()
  gender!: string;

  @Column({ name: "date_of_birth" })
  date_of_birth!: Date;

  @Column()
  location!: string;

  @Column()
  department!: string;

  @Column({ name: "job_title" })
  job_title!: string;

  @Column()
  salary!: number;

  @Column({ name: "date_of_hire" })
  date_of_hire!: Date;

  @Column()
  picture!: string;
}

export default Employee;
