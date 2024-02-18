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

    @OneToMany(() => Job, job => job.entreprise)
    jobs!: Job[]; 

    @OneToMany(() => Application, application => application.user)
    applications!: Application[];
}
