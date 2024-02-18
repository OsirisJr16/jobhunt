import {DataSource} from 'typeorm' ; 
import { User } from '../entity/user.entity';
import { Job } from '../entity/job.entity';
import { Application } from '../entity/application.entity';

require('dotenv').config();

export const myDataSource = new DataSource({
    type:"postgres" , 
    host:process.env.DB_HOST , 
    port:Number(process.env.DB_PORT),
    username:process.env.DB_USER , 
    password:process.env.DB_PASSWORD , 
    database:process.env.DB_NAME , 
    entities:[User , Job , Application] , 
    logging:true , 
    synchronize:true

})