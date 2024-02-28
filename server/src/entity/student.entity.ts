import { Entity, Column, OneToOne, JoinColumn ,PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity({ name: "students" })
export class Student {
  @PrimaryGeneratedColumn()
  userId!: number;

  @Column({ length: 255, nullable: true })
  StudentName?: string;

  @Column({ length: 255, nullable: true })
  StudentSchool?: string;

  @Column({ length: 255, nullable: true })
  StudentAddress?: string;

  @Column({ type: "text", nullable: true })
  studentDescription?: string;

  @OneToOne(() => User)
  @JoinColumn()
  user!: User;
}
