import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Job } from "./job.entity";
import { User } from "./user.entity";

@Entity({ name: 'application' })
export class Application {
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => Job, job => job.applications)
    @JoinColumn({ name: "job_id" })
    job!: Job;

    @ManyToOne(() => User, user => user.applications)
    @JoinColumn({ name: "user_id" })
    user!: User;

    @Column({ type: 'text' })
    cover_letter!: string;

    @Column({ type: 'timestamp without time zone' })
    application_date!: Date;

    @Column({ type: 'text' })
    resume!: string;
}
