'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('buys', [
      {id: 1,
        product_id : 2,
        order_id: 1,
        amount: 500,
        createdAt: "2023-02-22 00:00:00", 
        updatedAt: "2023-02-22 00:00:00"
      },
      {id: 2,
        product_id : 1,
        order_id: 2,
        amount: 700,
        createdAt: "2023-02-22 00:00:00", 
        updatedAt: "2023-02-22 00:00:00"
      },
  ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
