import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { User } from "./user.entity";
import { Application } from "./application.entity"; 

@Entity({name : 'jobs'}) 
export class Job{
    @PrimaryGeneratedColumn()
    id !:number ; 

    @Column({length : 255}) 
    title !: string ;

    @Column({type:'text'})
    description !: string ; 

    @Column({type:'text'})
    requirements !: string ; 

    @Column()
    salary !: number ;

    @Column({type:'timestamp without time zone'})
    date_post !: Date

    @ManyToOne(() => User, user => user.jobs)
    @JoinColumn({ name: "entreprise_id" })
    entreprise!: User;

    @OneToMany(() => Application, application => application.job) 
    applications!: Application[]; 
}
