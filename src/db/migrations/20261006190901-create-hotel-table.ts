

'use strict';

import { QueryInterface, DataTypes } from 'sequelize';

module.exports = {
  /**
   async up(queryInterface: QueryInterface) {
    await queryInterface.sequelize.query(`
        CREATE TABLE IF NOT EXISTS hotels (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            address VARCHAR(255) NOT NULL,
            location VARCHAR(255) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        );
    `);
}
   */

  async up(queryInterface: QueryInterface) { //up → code that makes new changes in the DB

    await queryInterface.createTable('hotels', {

      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },

      name: {
        type: DataTypes.STRING(255),
        allowNull: false
      },

      location: {
        type: DataTypes.STRING(255),
        allowNull: false
      },

      rating: {
        type: DataTypes.FLOAT,
        allowNull: false
      },

      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
      },

      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
      }

    });

  },
  

  async down(queryInterface: QueryInterface) {//down → code that reverts those changes

    // await queryInterface.dropTable('hotels');

  }

};
