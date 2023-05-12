'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Products', [{'id': 1, 'SKU': '31d81c0bac', 'LoteProduccion': 6, 'Costo': 1, 'Tiempo': 4},
    {'id': 2, 'SKU': '22993410e2', 'LoteProduccion': 4, 'Costo': 1, 'Tiempo': 3},
    {'id': 3, 'SKU': '015edda868', 'LoteProduccion': 2, 'Costo': 1, 'Tiempo': 5},
    {'id': 4, 'SKU': '7df9988cf9', 'LoteProduccion': 3, 'Costo': 1, 'Tiempo': 4},
    {'id': 5, 'SKU': '537b0722b5', 'LoteProduccion': 5, 'Costo': 1, 'Tiempo': 3},
    {'id': 6, 'SKU': '1384839fbe', 'LoteProduccion': 2, 'Costo': 1, 'Tiempo': 4},
    {'id': 7, 'SKU': '5df7f1701b', 'LoteProduccion': 4, 'Costo': 1, 'Tiempo': 6},
    {'id': 8, 'SKU': '8f36f2c5c3', 'LoteProduccion': 2, 'Costo': 1, 'Tiempo': 3},
    {'id': 9, 'SKU': '56b708699a', 'LoteProduccion': 3, 'Costo': 1, 'Tiempo': 4},
    {'id': 10, 'SKU': '8ed28eed84', 'LoteProduccion': 3, 'Costo': 1, 'Tiempo': 3},
    {'id': 11, 'SKU': 'd33c24a6c4', 'LoteProduccion': 2, 'Costo': 1, 'Tiempo': 2},
    {'id': 12, 'SKU': '5651dc98d1', 'LoteProduccion': 1, 'Costo': 1, 'Tiempo': 4},
    {'id': 13, 'SKU': 'cd4b7aab6f', 'LoteProduccion': 4, 'Costo': 1, 'Tiempo': 4},
    {'id': 14, 'SKU': '85552371f9', 'LoteProduccion': 3, 'Costo': 1, 'Tiempo': 2},
    {'id': 15, 'SKU': 'ab2da8d916', 'LoteProduccion': 3, 'Costo': 1, 'Tiempo': 4},
    {'id': 16, 'SKU': '1d1ca71a91', 'LoteProduccion': 2, 'Costo': 1, 'Tiempo': 2},
    {'id': 17, 'SKU': 'b8c943dcd7', 'LoteProduccion': 3, 'Costo': 1, 'Tiempo': 3},
    {'id': 18, 'SKU': '4d88a06422', 'LoteProduccion': 4, 'Costo': 1, 'Tiempo': 5},
    {'id': 19, 'SKU': 'ec89361b80', 'LoteProduccion': 3, 'Costo': 1, 'Tiempo': 2},
    {'id': 20, 'SKU': 'e702757a97', 'LoteProduccion': 3, 'Costo': 1, 'Tiempo': 4},
    {'id': 21, 'SKU': '031ccb997e', 'LoteProduccion': 2, 'Costo': 1, 'Tiempo': 4},
    {'id': 22, 'SKU': '460cf8fb01', 'LoteProduccion': 2, 'Costo': 1, 'Tiempo': 2},
    {'id': 23, 'SKU': '7cb14c4cec', 'LoteProduccion': 1, 'Costo': 1, 'Tiempo': 3},
    {'id': 24, 'SKU': '84c4f3be38', 'LoteProduccion': 2, 'Costo': 1, 'Tiempo': 4},
    {'id': 25, 'SKU': 'e70328935a', 'LoteProduccion': 3, 'Costo': 1, 'Tiempo': 2},
    {'id': 26, 'SKU': 'a8bd25d75e', 'LoteProduccion': 2, 'Costo': 1, 'Tiempo': 3},
    {'id': 27, 'SKU': '100bd51422', 'LoteProduccion': 3, 'Costo': 1, 'Tiempo': 4},
    {'id': 28, 'SKU': '6cd357a673', 'LoteProduccion': 4, 'Costo': 1, 'Tiempo': 5},
    {'id': 29, 'SKU': '84e65bfc0e', 'LoteProduccion': 2, 'Costo': 1, 'Tiempo': 5},
    {'id': 30, 'SKU': 'cad77c7dff', 'LoteProduccion': 1, 'Costo': 1, 'Tiempo': 2},
    {'id': 31, 'SKU': 'e0a787d052', 'LoteProduccion': 3, 'Costo': 1, 'Tiempo': 3},
    {'id': 32, 'SKU': 'd9175cd0ab', 'LoteProduccion': 2, 'Costo': 1, 'Tiempo': 4},
    {'id': 33, 'SKU': 'e9f2ebee73', 'LoteProduccion': 3, 'Costo': 1, 'Tiempo': 2},
    {'id': 34, 'SKU': '57d036e29e', 'LoteProduccion': 2, 'Costo': 1, 'Tiempo': 1},
    {'id': 35, 'SKU': '648e04a1d3', 'LoteProduccion': 5, 'Costo': 1, 'Tiempo': 3},
    {'id': 36, 'SKU': '018aa592b1', 'LoteProduccion': 3, 'Costo': 1, 'Tiempo': 4},
    {'id': 37, 'SKU': 'c9d107bcc5', 'LoteProduccion': 2, 'Costo': 1, 'Tiempo': 2},
    {'id': 38, 'SKU': '52f81a27b9', 'LoteProduccion': 3, 'Costo': 1, 'Tiempo': 2},
    {'id': 39, 'SKU': '8c6d70bd7e', 'LoteProduccion': 3, 'Costo': 1, 'Tiempo': 3},
    {'id': 40, 'SKU': '7424b21b1c', 'LoteProduccion': 2, 'Costo': 1, 'Tiempo': 4},
    {'id': 41, 'SKU': '11f954133c', 'LoteProduccion': 1, 'Costo': 1, 'Tiempo': 3},
    {'id': 42, 'SKU': '635212bf6c', 'LoteProduccion': 3, 'Costo': 1, 'Tiempo': 2},
    {'id': 43, 'SKU': '1694fddc6e', 'LoteProduccion': 3, 'Costo': 1, 'Tiempo': 4},
    {'id': 44, 'SKU': '5d1a9139a8', 'LoteProduccion': 2, 'Costo': 1, 'Tiempo': 5},
    {'id': 45, 'SKU': 'febf35a4ba', 'LoteProduccion': 4, 'Costo': 1, 'Tiempo': 2},
    {'id': 46, 'SKU': 'd846143374', 'LoteProduccion': 2, 'Costo': 1, 'Tiempo': 3},
    {'id': 47, 'SKU': '333a762aae', 'LoteProduccion': 1, 'Costo': 1, 'Tiempo': 4},
    {'id': 48, 'SKU': 'c93da4dfec', 'LoteProduccion': 2, 'Costo': 1, 'Tiempo': 2},
    {'id': 49, 'SKU': '02e409c8bf', 'LoteProduccion': 5, 'Costo': 1, 'Tiempo': 4},
    {'id': 50, 'SKU': 'adb4c6d1db', 'LoteProduccion': 1, 'Costo': 1, 'Tiempo': 3},
    {'id': 51, 'SKU': '4791719128', 'LoteProduccion': 3, 'Costo': 1, 'Tiempo': 2},
    {'id': 52, 'SKU': 'df55d1d95f', 'LoteProduccion': 4, 'Costo': 1, 'Tiempo': 3},
    {'id': 53, 'SKU': '823e36fad1', 'LoteProduccion': 1, 'Costo': 1, 'Tiempo': 3},
    {'id': 54, 'SKU': '4e0065d560', 'LoteProduccion': 4, 'Costo': 1, 'Tiempo': 4},
    {'id': 55, 'SKU': 'ecfc869d23', 'LoteProduccion': 3, 'Costo': 1, 'Tiempo': 3},
    {'id': 56, 'SKU': 'e481e233b2', 'LoteProduccion': 2, 'Costo': 1, 'Tiempo': 4},
    {'id': 57, 'SKU': '6716416950', 'LoteProduccion': 3, 'Costo': 1, 'Tiempo': 2},
    {'id': 58, 'SKU': 'adfb55e095', 'LoteProduccion': 2, 'Costo': 1, 'Tiempo': 4},
    {'id': 59, 'SKU': '0a44f324c1', 'LoteProduccion': 1, 'Costo': 1, 'Tiempo': 2},
    {'id': 60, 'SKU': '5a6574e79f', 'LoteProduccion': 4, 'Costo': 1, 'Tiempo': 4},
    {'id': 61, 'SKU': '6fee080a75', 'LoteProduccion': 2, 'Costo': 1, 'Tiempo': 3},
    {'id': 62, 'SKU': '7a205eb9cb', 'LoteProduccion': 1, 'Costo': 1, 'Tiempo': 2},
    {'id': 63, 'SKU': '2e8764580b', 'LoteProduccion': 4, 'Costo': 1, 'Tiempo': 3},
    {'id': 64, 'SKU': '24b96e2e69', 'LoteProduccion': 2, 'Costo': 1, 'Tiempo': 3},
    {'id': 65, 'SKU': 'ff4479d214', 'LoteProduccion': 2, 'Costo': 1, 'Tiempo': 2},
    {'id': 66, 'SKU': '051b0206d1', 'LoteProduccion': 3, 'Costo': 1, 'Tiempo': 2},
    {'id': 67, 'SKU': '4b63d969d8', 'LoteProduccion': 1, 'Costo': 1, 'Tiempo': 4},
    {'id': 68, 'SKU': '8701c5cdb7', 'LoteProduccion': 1, 'Costo': 1, 'Tiempo': 3},
    {'id': 69, 'SKU': '9a7ff52e69', 'LoteProduccion': 3, 'Costo': 1, 'Tiempo': 5},
    {'id': 70, 'SKU': '6b6bd5ce9f', 'LoteProduccion': 2, 'Costo': 1, 'Tiempo': 5},
    {'id': 71, 'SKU': '2c3e81f42b', 'LoteProduccion': 3, 'Costo': 1, 'Tiempo': 4},
    {'id': 72, 'SKU': '3287bfb415', 'LoteProduccion': 1, 'Costo': 1, 'Tiempo': 3},
    {'id': 73, 'SKU': '868db3472f', 'LoteProduccion': 2, 'Costo': 1, 'Tiempo': 3},
    {'id': 74, 'SKU': '3da1183c5b', 'LoteProduccion': 3, 'Costo': 1, 'Tiempo': 2},
    {'id': 75, 'SKU': '73b8bdf09f', 'LoteProduccion': 2, 'Costo': 1, 'Tiempo': 3},
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Products', null, {});
  }
};
