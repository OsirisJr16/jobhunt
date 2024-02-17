import { Entity , PrimaryGeneratedColumn ,Column, Unique  } from "typeorm";

@Entity() 

export class User{
    @PrimaryGeneratedColumn()
    id ; 

    @Column() 
    username ; 

    @Column()
    email ; 

    @Column()
    password ; 

    @Column()
    pdp ; 
}