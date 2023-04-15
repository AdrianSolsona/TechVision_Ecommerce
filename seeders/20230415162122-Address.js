'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('addresses', [
      {id: 1,
        name: "Alyna",
        surname: "solso",
        address: "Av maeia",
        phone: "76858594",
        country: "Spain",
        city: "Valencia",
        phone: "687765743",
        postcode: "12005", 
        createdAt: "2023-02-22 00:00:00", 
        updatedAt: "2023-02-22 00:00:00", 
        user_id: 1},
      {id: 2,
        
        name: "Ignacio",
        surname: "solso",
        address: "Av maeia",
        phone: "76858594",
        country: "Spain",
        city: "Valencia",
        postcode: "12005", 
        createdAt: "2023-02-22 00:00:00", 
        updatedAt: "2023-02-22 00:00:00", 
        user_id: 2},
      {id: 3,
        name: "Mario",
        surname: "solso",
        address: "Av maeia",
        phone: "76858594",
        country: "Spain",
        city: "Valencia",
        postcode: "12005", 
        createdAt: "2023-02-22 00:00:00", 
        updatedAt: "2023-02-22 00:00:00", 
        user_id: 3},
      {id: 4,
        name: "Pedro",
        surname: "solso",
        address: "Av maeia",
        phone: "76858594",
        country: "Spain",
        city: "Valencia",
        postcode: "12005", 
        createdAt: "2023-02-22 00:00:00", 
        updatedAt: "2023-02-22 00:00:00", 
        user_id: 4},
 
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
