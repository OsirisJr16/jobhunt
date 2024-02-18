import { Entity  , Column , PrimaryGeneratedColumn , ManyToOne ,JoinColumn } from "typeorm";
import { User } from "./user.entity";

@Entity({name : 'jobs'}) 

export class Job{
    @PrimaryGeneratedColumn()
    id !:number ; 

    @Column({length : 255}) 
    title !: string ;

    @Column({type:'text'})
    descirption !: string ; 

    @Column({length : 255}) 
    company !:string ; 

    @Column({type:'text'})
    requirements !: string ; 

    @Column()
    salary !: number ;

    @Column({type:'timestamp without time zone'})
    date_post !: Date

    @ManyToOne(() => User, user => user.jobs)
    @JoinColumn({ name: "entreprise_id" })
    entreprise!: User;
}