'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categories', [
      {id: 1,
        name: "LAPTOP",
        highlight: "yes",
        brand: "APPLE",
        createdAt: "2023-02-22 00:00:00", 
        updatedAt: "2023-02-22 00:00:00"
      },
      {id: 2,
        name: "PHONE",
        highlight: "no",
        brand: "APPLE",
        createdAt: "2023-02-22 00:00:00", 
        updatedAt: "2023-02-22 00:00:00"
      },
      {id: 3,
        name: "TABLET",
        highlight: "no",
        brand: "APPLE",
        createdAt: "2023-02-22 00:00:00", 
        updatedAt: "2023-02-22 00:00:00"
      },
      {id: 4,
        name: "WATCH",
        highlight: "no",
        brand: "APPLE",
        createdAt: "2023-02-22 00:00:00", 
        updatedAt: "2023-02-22 00:00:00"
      },
      {id: 5,
        name: "HEADPHONES",
        highlight: "no",
        brand: "APPLE",
        createdAt: "2023-02-22 00:00:00", 
        updatedAt: "2023-02-22 00:00:00"
      },
      {id: 6,
        name: "TV & HOME",
        highlight: "no",
        brand: "APPLE",
        createdAt: "2023-02-22 00:00:00", 
        updatedAt: "2023-02-22 00:00:00"
      },
      {id: 7,
        name: "DESKTOP",
        highlight: "no",
        brand: "APPLE",
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
