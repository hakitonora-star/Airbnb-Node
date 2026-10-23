import{QueryInterface} from "sequelize"

//  /*
//    async up(queryInterface: QueryInterface) {
//     await queryInterface.sequelize.query(`
//         CREATE TABLE IF NOT EXISTS hotels (
//             id INT AUTO_INCREMENT PRIMARY KEY,
//             name VARCHAR(255) NOT NULL,
//             address VARCHAR(255) NOT NULL,
//             location VARCHAR(255) NOT NULL,
//             created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//             updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
//         );
//     `);
// }
//    */


module.exports = {
  async up (queryInterface:QueryInterface) {
  await queryInterface.createTable('hotels',{
      id:{
        type:'INTEGER',
        autoIncrement:true,
        primaryKey:true,
        allowNull:false

      },
      name:{
        type:'VARCHAR(255)',
        allowNull:false


      },
      location:{
        type:'VARCHAR(255)',
        allowNull:false

      },
     
      createdAt:{
        type:'TIMESTAMP',
        defaultValue:new Date(),
        allowNull:false


      },
      updatedAt:{
        type:'TIMESTAMP',
        defaultValue:new Date(),
        allowNull:false


      }


    })
   
  },

  async down (queryInterface:QueryInterface) {
     await queryInterface.dropTable('hotels');
    


   
  }
};



