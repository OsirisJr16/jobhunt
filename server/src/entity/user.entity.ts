import { Entity, Column, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ length: 255 }) 
    username!: string;

    @Column({ length: 255, unique: true }) 
    @Unique(['email'])
    email!: string;

    @Column({ length: 255 }) 
    password!: string;

    @Column({ length: 255 }) 
    role!: string;

    @Column({ length: 255, nullable: true }) 
    pdp!: string ;
}
