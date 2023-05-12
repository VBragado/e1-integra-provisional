'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     *
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Formulas', [
    {'id': 1, 'Producto': '4e0065d560', 'Ingrediente': 'e70328935a', 'Cantidad': 0},
    {'id': 2, 'Producto': '4e0065d560', 'Ingrediente': '1384839fbe', 'Cantidad': 0},
    {'id': 3, 'Producto': '4e0065d560', 'Ingrediente': 'ec89361b80', 'Cantidad': 0},
    {'id': 4, 'Producto': '4e0065d560', 'Ingrediente': '02e409c8bf', 'Cantidad': 0},
    {'id': 5, 'Producto': '4e0065d560', 'Ingrediente': 'cd4b7aab6f', 'Cantidad': 0},
    {'id': 6, 'Producto': '4e0065d560', 'Ingrediente': '648e04a1d3', 'Cantidad': 0},
    {'id': 7, 'Producto': '4e0065d560', 'Ingrediente': 'febf35a4ba', 'Cantidad': 0},
    {'id': 8, 'Producto': 'ecfc869d23', 'Ingrediente': 'e70328935a', 'Cantidad': 0},
    {'id': 9, 'Producto': 'ecfc869d23', 'Ingrediente': '537b0722b5', 'Cantidad': 0},
    {'id': 10, 'Producto': 'ecfc869d23', 'Ingrediente': 'ec89361b80', 'Cantidad': 0},
    {'id': 11, 'Producto': 'ecfc869d23', 'Ingrediente': '02e409c8bf', 'Cantidad': 0},
    {'id': 12, 'Producto': 'ecfc869d23', 'Ingrediente': 'cd4b7aab6f', 'Cantidad': 0},
    {'id': 13, 'Producto': 'ecfc869d23', 'Ingrediente': 'e702757a97', 'Cantidad': 0},
    {'id': 14, 'Producto': 'e481e233b2', 'Ingrediente': 'e70328935a', 'Cantidad': 0},
    {'id': 15, 'Producto': 'e481e233b2', 'Ingrediente': '5df7f1701b', 'Cantidad': 0},
    {'id': 16, 'Producto': 'e481e233b2', 'Ingrediente': 'ec89361b80', 'Cantidad': 0},
    {'id': 17, 'Producto': 'e481e233b2', 'Ingrediente': '02e409c8bf', 'Cantidad': 0},
    {'id': 18, 'Producto': 'e481e233b2', 'Ingrediente': '7cb14c4cec', 'Cantidad': 0},
    {'id': 19, 'Producto': '6716416950', 'Ingrediente': 'a8bd25d75e', 'Cantidad': 0},
    {'id': 20, 'Producto': '6716416950', 'Ingrediente': '1384839fbe', 'Cantidad': 0},
    {'id': 21, 'Producto': '6716416950', 'Ingrediente': 'e9f2ebee73', 'Cantidad': 0},
    {'id': 22, 'Producto': '6716416950', 'Ingrediente': '8c6d70bd7e', 'Cantidad': 0},
    {'id': 23, 'Producto': '6716416950', 'Ingrediente': '85552371f9', 'Cantidad': 0},
    {'id': 24, 'Producto': '6716416950', 'Ingrediente': 'adb4c6d1db', 'Cantidad': 0},
    {'id': 25, 'Producto': '6716416950', 'Ingrediente': '84c4f3be38', 'Cantidad': 0},
    {'id': 26, 'Producto': 'adfb55e095', 'Ingrediente': 'e70328935a', 'Cantidad': 0},
    {'id': 27, 'Producto': 'adfb55e095', 'Ingrediente': '1384839fbe', 'Cantidad': 0},
    {'id': 28, 'Producto': 'adfb55e095', 'Ingrediente': '4791719128', 'Cantidad': 0},
    {'id': 29, 'Producto': 'adfb55e095', 'Ingrediente': '648e04a1d3', 'Cantidad': 0},
    {'id': 30, 'Producto': 'adfb55e095', 'Ingrediente': 'ec89361b80', 'Cantidad': 0},
    {'id': 31, 'Producto': 'adfb55e095', 'Ingrediente': '02e409c8bf', 'Cantidad': 0},
    {'id': 32, 'Producto': 'adfb55e095', 'Ingrediente': '85552371f9', 'Cantidad': 0},
    {'id': 33, 'Producto': '0a44f324c1', 'Ingrediente': 'a8bd25d75e', 'Cantidad': 0},
    {'id': 34, 'Producto': '0a44f324c1', 'Ingrediente': '1384839fbe', 'Cantidad': 0},
    {'id': 35, 'Producto': '0a44f324c1', 'Ingrediente': 'df55d1d95f', 'Cantidad': 0},
    {'id': 36, 'Producto': '0a44f324c1', 'Ingrediente': '648e04a1d3', 'Cantidad': 0},
    {'id': 37, 'Producto': '0a44f324c1', 'Ingrediente': 'ec89361b80', 'Cantidad': 0},
    {'id': 38, 'Producto': '0a44f324c1', 'Ingrediente': '02e409c8bf', 'Cantidad': 0},
    {'id': 39, 'Producto': '0a44f324c1', 'Ingrediente': 'cd4b7aab6f', 'Cantidad': 0},
    {'id': 40, 'Producto': '0a44f324c1', 'Ingrediente': 'febf35a4ba', 'Cantidad': 0},
    {'id': 41, 'Producto': '5a6574e79f', 'Ingrediente': 'a8bd25d75e', 'Cantidad': 0},
    {'id': 42, 'Producto': '5a6574e79f', 'Ingrediente': '8f36f2c5c3', 'Cantidad': 0},
    {'id': 43, 'Producto': '5a6574e79f', 'Ingrediente': 'ec89361b80', 'Cantidad': 0},
    {'id': 44, 'Producto': '5a6574e79f', 'Ingrediente': '02e409c8bf', 'Cantidad': 0},
    {'id': 45, 'Producto': '5a6574e79f', 'Ingrediente': 'ab2da8d916', 'Cantidad': 0},
    {'id': 46, 'Producto': '5a6574e79f', 'Ingrediente': '635212bf6c', 'Cantidad': 0},
    {'id': 47, 'Producto': '6fee080a75', 'Ingrediente': 'e70328935a', 'Cantidad': 0},
    {'id': 48, 'Producto': '6fee080a75', 'Ingrediente': '1384839fbe', 'Cantidad': 0},
    {'id': 49, 'Producto': '6fee080a75', 'Ingrediente': '52f81a27b9', 'Cantidad': 0},
    {'id': 50, 'Producto': '6fee080a75', 'Ingrediente': 'cad77c7dff', 'Cantidad': 0},
    {'id': 51, 'Producto': '6fee080a75', 'Ingrediente': 'ec89361b80', 'Cantidad': 0},
    {'id': 52, 'Producto': '6fee080a75', 'Ingrediente': 'c93da4dfec', 'Cantidad': 0},
    {'id': 53, 'Producto': '7a205eb9cb', 'Ingrediente': 'e70328935a', 'Cantidad': 0},
    {'id': 54, 'Producto': '7a205eb9cb', 'Ingrediente': '1384839fbe', 'Cantidad': 0},
    {'id': 55, 'Producto': '7a205eb9cb', 'Ingrediente': 'c9d107bcc5', 'Cantidad': 0},
    {'id': 56, 'Producto': '7a205eb9cb', 'Ingrediente': '5d1a9139a8', 'Cantidad': 0},
    {'id': 57, 'Producto': '7a205eb9cb', 'Ingrediente': 'ab2da8d916', 'Cantidad': 0},
    {'id': 58, 'Producto': '7a205eb9cb', 'Ingrediente': '"2', 'Cantidad': 0},
    {'id': 59, 'Producto': '7a205eb9cb', 'Ingrediente': '11f954133c', 'Cantidad': 0},
    {'id': 60, 'Producto': '2e8764580b', 'Ingrediente': '100bd51422', 'Cantidad': 0},
    {'id': 61, 'Producto': '2e8764580b', 'Ingrediente': '1384839fbe', 'Cantidad': 0},
    {'id': 62, 'Producto': '2e8764580b', 'Ingrediente': '57d036e29e', 'Cantidad': 0},
    {'id': 63, 'Producto': '2e8764580b', 'Ingrediente': '31d81c0bac', 'Cantidad': 0},
    {'id': 64, 'Producto': '2e8764580b', 'Ingrediente': '02e409c8bf', 'Cantidad': 0},
    {'id': 65, 'Producto': '2e8764580b', 'Ingrediente': 'ec89361b80', 'Cantidad': 0},
    {'id': 66, 'Producto': '2e8764580b', 'Ingrediente': '333a762aae', 'Cantidad': 0},
    {'id': 67, 'Producto': '24b96e2e69', 'Ingrediente': 'e70328935a', 'Cantidad': 0},
    {'id': 68, 'Producto': '24b96e2e69', 'Ingrediente': '1384839fbe', 'Cantidad': 0},
    {'id': 69, 'Producto': '24b96e2e69', 'Ingrediente': 'd9175cd0ab', 'Cantidad': 0},
    {'id': 70, 'Producto': '24b96e2e69', 'Ingrediente': '85552371f9', 'Cantidad': 0},
    {'id': 71, 'Producto': '24b96e2e69', 'Ingrediente': '8c6d70bd7e', 'Cantidad': 0},
    {'id': 72, 'Producto': 'ff4479d214', 'Ingrediente': 'e70328935a', 'Cantidad': 0},
    {'id': 73, 'Producto': 'ff4479d214', 'Ingrediente': '1384839fbe', 'Cantidad': 0},
    {'id': 74, 'Producto': 'ff4479d214', 'Ingrediente': '4d88a06422', 'Cantidad': 0},
    {'id': 75, 'Producto': 'ff4479d214', 'Ingrediente': '5d1a9139a8', 'Cantidad': 0},
    {'id': 76, 'Producto': 'ff4479d214', 'Ingrediente': '648e04a1d3', 'Cantidad': 0},
    {'id': 77, 'Producto': 'ff4479d214', 'Ingrediente': 'ec89361b80', 'Cantidad': 0},
    {'id': 78, 'Producto': 'ff4479d214', 'Ingrediente': 'd846143374', 'Cantidad': 0},
    {'id': 79, 'Producto': '051b0206d1', 'Ingrediente': 'e70328935a', 'Cantidad': 0},
    {'id': 80, 'Producto': '051b0206d1', 'Ingrediente': '537b0722b5', 'Cantidad': 0},
    {'id': 81, 'Producto': '051b0206d1', 'Ingrediente': '648e04a1d3', 'Cantidad': 0},
    {'id': 82, 'Producto': '051b0206d1', 'Ingrediente': 'cd4b7aab6f', 'Cantidad': 0},
    {'id': 83, 'Producto': '051b0206d1', 'Ingrediente': '7424b21b1c', 'Cantidad': 0},
    {'id': 84, 'Producto': '4b63d969d8', 'Ingrediente': '100bd51422', 'Cantidad': 0},
    {'id': 85, 'Producto': '4b63d969d8', 'Ingrediente': '8ed28eed84', 'Cantidad': 0},
    {'id': 86, 'Producto': '4b63d969d8', 'Ingrediente': '"2', 'Cantidad': 0},
    {'id': 87, 'Producto': '4b63d969d8', 'Ingrediente': '02e409c8bf', 'Cantidad': 0},
    {'id': 88, 'Producto': '4b63d969d8', 'Ingrediente': 'ab2da8d916', 'Cantidad': 0},
    {'id': 89, 'Producto': '4b63d969d8', 'Ingrediente': '1694fddc6e', 'Cantidad': 0},
    {'id': 90, 'Producto': '8701c5cdb7', 'Ingrediente': 'e70328935a', 'Cantidad': 0},
    {'id': 91, 'Producto': '8701c5cdb7', 'Ingrediente': '7df9988cf9', 'Cantidad': 0},
    {'id': 92, 'Producto': '8701c5cdb7', 'Ingrediente': '648e04a1d3', 'Cantidad': 0},
    {'id': 93, 'Producto': '8701c5cdb7', 'Ingrediente': 'ec89361b80', 'Cantidad': 0},
    {'id': 94, 'Producto': '8701c5cdb7', 'Ingrediente': '02e409c8bf', 'Cantidad': 0},
    {'id': 95, 'Producto': '8701c5cdb7', 'Ingrediente': '7cb14c4cec', 'Cantidad': 0},
    {'id': 96, 'Producto': '9a7ff52e69', 'Ingrediente': 'e70328935a', 'Cantidad': 0},
    {'id': 97, 'Producto': '9a7ff52e69', 'Ingrediente': 'd33c24a6c4', 'Cantidad': 0},
    {'id': 98, 'Producto': '9a7ff52e69', 'Ingrediente': 'e0a787d052', 'Cantidad': 0},
    {'id': 99, 'Producto': '9a7ff52e69', 'Ingrediente': '85552371f9', 'Cantidad': 0},
    {'id': 100, 'Producto': '9a7ff52e69', 'Ingrediente': '8c6d70bd7e', 'Cantidad': 0},
    {'id': 101, 'Producto': '6b6bd5ce9f', 'Ingrediente': 'e70328935a', 'Cantidad': 0},
    {'id': 102, 'Producto': '6b6bd5ce9f', 'Ingrediente': '1384839fbe', 'Cantidad': 0},
    {'id': 103, 'Producto': '6b6bd5ce9f', 'Ingrediente': '018aa592b1', 'Cantidad': 0},
    {'id': 104, 'Producto': '6b6bd5ce9f', 'Ingrediente': '85552371f9', 'Cantidad': 0},
    {'id': 105, 'Producto': '6b6bd5ce9f', 'Ingrediente': 'b8c943dcd7', 'Cantidad': 0},
    {'id': 106, 'Producto': '2c3e81f42b', 'Ingrediente': 'e70328935a', 'Cantidad': 0},
    {'id': 107, 'Producto': '2c3e81f42b', 'Ingrediente': '84e65bfc0e', 'Cantidad': 0},
    {'id': 108, 'Producto': '2c3e81f42b', 'Ingrediente': 'ec89361b80', 'Cantidad': 0},
    {'id': 109, 'Producto': '2c3e81f42b', 'Ingrediente': '02e409c8bf', 'Cantidad': 0},
    {'id': 110, 'Producto': '2c3e81f42b', 'Ingrediente': 'cd4b7aab6f', 'Cantidad': 0},
    {'id': 111, 'Producto': '2c3e81f42b', 'Ingrediente': '635212bf6c', 'Cantidad': 0},
    {'id': 112, 'Producto': '3287bfb415', 'Ingrediente': '100bd51422', 'Cantidad': 0},
    {'id': 113, 'Producto': '3287bfb415', 'Ingrediente': '7df9988cf9', 'Cantidad': 0},
    {'id': 114, 'Producto': '3287bfb415', 'Ingrediente': '4d88a06422', 'Cantidad': 0},
    {'id': 115, 'Producto': '3287bfb415', 'Ingrediente': '02e409c8bf', 'Cantidad': 0},
    {'id': 116, 'Producto': '3287bfb415', 'Ingrediente': 'ab2da8d916', 'Cantidad': 0},
    {'id': 117, 'Producto': '3287bfb415', 'Ingrediente': 'ec89361b80', 'Cantidad': 0},
    {'id': 118, 'Producto': '868db3472f', 'Ingrediente': '100bd51422', 'Cantidad': 0},
    {'id': 119, 'Producto': '868db3472f', 'Ingrediente': '5651dc98d1', 'Cantidad': 0},
    {'id': 120, 'Producto': '868db3472f', 'Ingrediente': '6cd357a673', 'Cantidad': 0},
    {'id': 121, 'Producto': '868db3472f', 'Ingrediente': '02e409c8bf', 'Cantidad': 0},
    {'id': 122, 'Producto': '868db3472f', 'Ingrediente': '823e36fad1', 'Cantidad': 0},
    {'id': 123, 'Producto': '3da1183c5b', 'Ingrediente': 'e70328935a', 'Cantidad': 0},
    {'id': 124, 'Producto': '3da1183c5b', 'Ingrediente': '015edda868', 'Cantidad': 0},
    {'id': 125, 'Producto': '3da1183c5b', 'Ingrediente': '648e04a1d3', 'Cantidad': 0},
    {'id': 126, 'Producto': '3da1183c5b', 'Ingrediente': '85552371f9', 'Cantidad': 0},
    {'id': 127, 'Producto': '3da1183c5b', 'Ingrediente': '7424b21b1c', 'Cantidad': 0},
    {'id': 128, 'Producto': '73b8bdf09f', 'Ingrediente': 'e70328935a', 'Cantidad': 0},
    {'id': 129, 'Producto': '73b8bdf09f', 'Ingrediente': '56b708699a', 'Cantidad': 0},
    {'id': 130, 'Producto': '73b8bdf09f', 'Ingrediente': '018aa592b1', 'Cantidad': 0},
    {'id': 131, 'Producto': '73b8bdf09f', 'Ingrediente': 'b8c943dcd7', 'Cantidad': 0},
    {'id': 132, 'Producto': '73b8bdf09f', 'Ingrediente': '031ccb997e', 'Cantidad': 0}
    ], {})   
  
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Formulas', null, {});
  }
};