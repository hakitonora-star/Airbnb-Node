
import { Sequelize } from "sequelize";
import { dbConfig } from "../../config";
const sequelize=new Sequelize({
             username: dbConfig.DB_USER,
            password: dbConfig.DB_PASSWORD,
            database: dbConfig.DB_NAME,
            host: dbConfig.DB_HOST,
            dialect: 'mysql',
            logging:true
    
});
export  default sequelize;
