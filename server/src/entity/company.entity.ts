import { Entity, Column, JoinColumn, OneToOne ,PrimaryGeneratedColumn} from "typeorm";
import { User } from "./user.entity";

@Entity({ name: "companies" })
export class Company {
  @PrimaryGeneratedColumn()
  userId!:number
  
  @Column({ length: 255, nullable: true })
  companyName?: string;

  @Column({ length: 255, nullable: true })
  companyAddress?: string;

  @Column({ type: "text", nullable: true })
  companyDescription?: string;

  @OneToOne(()=> User)
  @JoinColumn()
  user!:User ; 
}
