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
  