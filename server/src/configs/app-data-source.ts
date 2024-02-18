import {DataSource} from 'typeorm' ; 

require('dotenv').config();

export const myDataSource = new DataSource({
    type:"postgres" , 
    host:process.env.DB_HOST , 
    port:Number(process.env.DB_PORT),
    username:process.env.DB_USER , 
    password:process.env.DB_PASSWORD , 
    database:process.env.DB_NAME , 
    entities:["src/models/*.ts"] , 
    logging:true , 
    synchronize:true

})