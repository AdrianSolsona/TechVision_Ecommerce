'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categories', [
      {id: 1,
        name: "Sneakers",
        highlight: "yes",
        brand: "Nike",
        createdAt: "2023-02-22 00:00:00", 
        updatedAt: "2023-02-22 00:00:00"
      },
      {id: 2,
        name: "Phone",
        highlight: "no",
        brand: "apple",
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
