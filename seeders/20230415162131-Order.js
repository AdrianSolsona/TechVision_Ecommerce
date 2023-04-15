'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('orders', [
      {id: 1,
        user_id: 2,
        status: "pending",
        date: "2023-03-01 00:00:00",
        total: 300,
        createdAt: "2023-02-22 00:00:00", 
        updatedAt: "2023-02-22 00:00:00"
      },
      {id: 2,
        user_id : 3,
        status: "complete",
        date: "2023-03-01 00:00:00",
        total: 400,
        createdAt: "2023-02-22 00:00:00", 
        updatedAt: "2023-02-22 00:00:00"
      }
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
