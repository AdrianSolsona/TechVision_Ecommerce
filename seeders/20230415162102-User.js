'use strict';

const bcrypt = require("bcrypt");
const password1 = "788769988"
const password2 = "734786493"
const password3 = "734786495"
const password4 = "734786498"

const encryptedPassword1 = bcrypt.hashSync(password1, 10);
const encryptedPassword2 = bcrypt.hashSync(password2, 10);
const encryptedPassword3 = bcrypt.hashSync(password3, 10);
const encryptedPassword4 = bcrypt.hashSync(password4, 10);

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('Users', [
      {id: 1, 
        password : encryptedPassword1, 
        email: "alyna@gmail.com",
        createdAt: "2023-02-22 00:00:00", 
        updatedAt: "2023-02-22 00:00:00", 
        rol_id: 2},
      {id: 2,
        password : encryptedPassword2, 
        email: "ignacio@gmail.com",
        createdAt: "2023-02-22 00:00:00", 
        updatedAt: "2023-02-22 00:00:00", 
        rol_id: 2},
      {id: 3,
        password : encryptedPassword3, 
        email: "mario@gmail.com",
        createdAt: "2023-02-22 00:00:00", 
        updatedAt: "2023-02-22 00:00:00", 
        rol_id: 2},
      {id: 4,
        password : encryptedPassword4, 
        email: "pedro@gmail.com",
        createdAt: "2023-02-22 00:00:00", 
        updatedAt: "2023-02-22 00:00:00", 
        rol_id: 2},
 
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
