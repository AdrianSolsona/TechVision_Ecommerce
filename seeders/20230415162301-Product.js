'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', [
      {id: 1, name: "Movil iphone",
        price: 1200,
        description: "muy colorido",
        status: "disponible",
        image: "imagen",
        render: "renderizado 3D",
        category_id: 2,
        createdAt: "2023-02-22 00:00:00", 
        updatedAt: "2023-02-22 00:00:00"},
      {id: 2, name: "Zapatillas nike",
        price: 150,
        description: "muy bonito",
        status: "disponible",
        image: "imagen",
        render: "renderizado 3D",
        category_id: 1,
        createdAt: "2023-02-22 00:00:00", 
        updatedAt: "2023-02-22 00:00:00"},
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
