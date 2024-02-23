import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Job } from "./job.entity";
import { Application } from "./application.entity";

@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ length: 255 }) 
    username!: string;

    @Column({ length: 255, unique: true }) 
    email!: string;

    @Column({ length: 255 }) 
    password!: string;

    @Column({ length: 255 }) 
    role!: string;

    @Column({ length: 255, nullable: true }) 
    pdp!: string ;

    // "student" role
    @Column({ length: 255, nullable: true }) 
    StudentName?: string;

    @Column({ length: 255, nullable: true }) 
    StudentSchool?: string;

    @Column({ length: 255, nullable: true }) 
    StudentAddress?: string;

    @Column({ type: 'text', nullable: true }) 
    studentDescription?: string;
    // "company" role
    @Column({ length: 255, nullable: true }) 
    companyName?: string;

    @Column({ length: 255, nullable: true }) 
    companyAddress?: string;

    @Column({ type: 'text', nullable: true }) 
    companyDescription?: string;

    @OneToMany(() => Job, job => job.entreprise)
    jobs!: Job[]; 

    @OneToMany(() => Application, application => application.user)
    applications!: Application[];
}
