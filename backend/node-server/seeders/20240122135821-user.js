'use strict';

const getUsers = require('./utils/user.seed');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const userCount = 30; //seed 30 users
    const users = getUsers(userCount);

    return queryInterface.bulkInsert('Users', users);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    return queryInterface.bulkDelete('Users', null, {});
  },
};
