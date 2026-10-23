import { FLOAT, INTEGER, QueryInterface  } from "sequelize";
// its like adding version like first we create table then we add columns so its like we adding versions one by one
/*
module.exports = {
  async up (queryInterface:QueryInterface) {
    await queryInterface.sequelize.query(`
      ALTER TABLES hotels
      ADD Column rating  DECIMAL(3,2) default NULL,
       ADD Column rating_count INT default NULL,

      `)
    
  },
  */
module.exports = {
  async up (queryInterface:QueryInterface) {
    await queryInterface.addColumn('hotels','rating',{
      type:FLOAT,
       allowNull: false,
      defaultValue: 0,
    })

    await queryInterface.addColumn('hotels','rating_count',{
      type:INTEGER,
      allowNull:false,
      defaultValue: 0,

    })
    
  },

  async down (queryInterface:QueryInterface) {
    await queryInterface.removeColumn('hotels','rating_count');
    await queryInterface.removeColumn('hotels','rating')
   
  },
};
