

import { QueryInterface } from "sequelize";

module.exports = {
  async up (queryInterface:QueryInterface) {
    await queryInterface.sequelize.query(`
      ALTER TABLE hotels
      ADD COLUMN Price INT DEFAULT NULL
      `)
    
  },

  async down (queryInterface:QueryInterface) {
     await queryInterface.sequelize.query(`
      ALTER TABLE hotels
    DROP COLUMN Price;
      `)
    

    
  }
};
