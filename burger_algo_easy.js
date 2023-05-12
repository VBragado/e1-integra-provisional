// CREAR 10 HAMBURGUESAS

const axios = require('axios');

//const sequelize = require('../config/database');
//const Products = require('./models/product');
//const Formulas = require('./models/formula');

const db = require('./models');
const Products = db.Product;
const Formulas = db.Formula;

let total = 0;
const burgerId = "6b6bd5ce9f";
const ing1 = "e70328935a";
const q1 = 12;
const ing2 = "1384839fbe";
const ing3 = "018aa592b1";
const ing4 = "85552371f9";
const ing5 = "b8c943dcd7";

elements = {};
for (element in elements) {

for (let i = 0; i < items.length; i++) {
    try {
      await axios.patch(`https://api.example.com/items/${items[i].id}`, {
        name: items[i].name,
        quantity: items[i].quantity
      });
    } catch (error) {
      console.error(error);
    }
  }

}