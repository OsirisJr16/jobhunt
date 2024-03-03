import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne, JoinColumn } from "typeorm";
import { Job } from "./job.entity";
import { Application } from "./application.entity";
import { Student } from "./student.entity";
import { Company } from "./company.entity";

@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn()
  id!: number;
  
  @Column({ length: 255, unique: true })
  email!: string;

  @Column({ length: 255 })
  password!: string;

  @Column({ length: 255 })
  role!: string;

  @Column({ length: 255, nullable: true })
  pdp!: string;

  @Column({ length: 255, nullable: true })
  linkedinLink!: string;

  @OneToMany(() => Job, (job) => job.entreprise)
  jobs!: Job[];

  @OneToMany(() => Application, (application) => application.user)
  applications!: Application[];

  // @OneToOne(() => Student, student => student.user, { cascade: true, nullable: true })
  // @JoinColumn()
  // student?: Student;

  // @OneToOne(() => Company, company => company.user, { cascade: true, nullable: true })
  // @JoinColumn()
  // company?: Company;
}
