'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'LootBoxes',
      [
        {
          name: 'Box #1',
          price: 200,
          description: 'Бумажные мечи ниндзя',
        },
        {
          name: 'Box #2',
          price: 500,
          description: 'Карманный теремок',
        },
        {
          name: 'Box #3',
          price: 750,
          description: 'Чарующие кубики льда',
        },
        {
          name: 'Box #4',
          price: 2000,
          description: 'Загадочная пыльца единорога',
        },
        {
          name: 'Box #5',
          price: 600,
          description: 'Сладкий компас',
        },
        {
          name: 'Box #6',
          price: 900,
          description: 'Кружка-перевёртыш',
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
