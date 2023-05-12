// CREAR 10 HAMBURGUESAS

const axios = require('axios');

//const sequelize = require('../config/database');
//const Products = require('./models/product');
//const Formulas = require('./models/formula');

const db = require('./models');
const Products = db.Product;
const Formulas = db.Formula;

function getLowestZ(lote, quantity) {
    let Z = Math.ceil(quantity / lote) * lote; // Z must be a multiple of lote
    while (Z <= quantity) {
      Z += lote; // Z must be greater than quantity
    }
    return Z;
  }

let total = 0;
const burgerId = "6b6bd5ce9f";

// definimos ex const como let
let ingredients;
let ingredientsArray;


// Funcion para revisar si existe disponibilidad de ingredientes para hacer lote de hamburguesas
async function IngredientsAvailable(MinimumValues) {
    // Make a GET request to retrieve inventory information for the target store
    const inventoryResponse = await axios.get(`https://dev.api-proyecto.2023-1.tallerdeintegracion.cl/warehouse/stores/${storeId}/inventory`, {
      headers: {
        Authorization: `Bearer ${token}`, // ADD TOKEN !!!!!!!!!!
      },
    });
    const inventoryData = inventoryResponse.data;
  
    for (const ingredient of ingredients) {
        let item = inventoryData.find((item) => item.sku === ingredient.Ingrediente);
        if (item) {
            if (item.total < MinimumValues[ingredient.Ingrediente]) {
                return false;
            }
          } else {
            return false;
          }
        }
    return true;
    }

// Funcion para mover iingredientes
async function moveIngredients(MinimumValues) {
    // Iterate over the MinimumValues dictionary
    for (const [productId, quantity] of Object.entries(MinimumValues)) { // REVISAR
      // Execute the PATCH call X number of times
      for (let i = 0; i < quantity; i++) {
        try {
          // Execute the PATCH call for the current productId
          await axios.patch(`https://dev.api-proyecto.2023-1.tallerdeintegracion.cl/warehouse/products/${productId}`, {
            store: kitchenId
          }, {
            headers: {
              Authorization: `Bearer ${token}`, // ADD TOKEN!!!!!
            },
          });
          console.log(`Moved ingredient ${productId}`);
        } catch (error) {
          console.error(`Error moving ingredient ${productId}: ${error.message}`);
        }
      }
    }
  }
  
// Funcion para generar ingredientes
async function generateIngredients(IdealProductionValues) {
    for (const sku in IdealProductionValues) {
      const quantity = IdealProductionValues[sku];
      await axios.post(
        'https://dev.api-proyecto.2023-1.tallerdeintegracion.cl/warehouse/products',
        {
          sku: sku,
          quantity: quantity
        },
        {
          headers: {
            Authorization: `Bearer ${token}` // ADD TOKEN !!!!!!!!!!
          }
        }
      );
    }
  }

async function generateBurger() {
    await axios.post( // Generate burger
        'https://dev.api-proyecto.2023-1.tallerdeintegracion.cl/warehouse/products',
        {
          sku: burgerId,
          quantity: burgerLot.LoteProduccion
        },
        {
          headers: {
            Authorization: `Bearer ${token}` // ADD TOKEN !!!!!!!!!!
          }
        }
      );
}


async function ingredientLotFinder() {
    let lot = await Products.findOne({
        where: { SKU: ingredient.Ingrediente },
        attributes: ["LoteProduccion"],
        });
    return lot;
}



async function function0(){
// Temporary fix
// Make a POST request to retrieve the authorization token
const authResponse = await axios.post('https://dev.api-proyecto.2023-1.tallerdeintegracion.cl/warehouse/auth', 
{group: 18, secret: 'DtyTZCeKVv9Bj[AN6_'} // ACTUUALMENTE EL DE DESARROLLO. CAMBIAR
);
const token = authResponse.data.token;
// Make a GET request to retrieve stores information
const storesResponse = await axios.get('https://dev.api-proyecto.2023-1.tallerdeintegracion.cl/warehouse/stores', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const storesData = storesResponse.data;
  // Find the first store with buffer = false
  const storeId = storesData.find(store => store.buffer === false && store.kitchen === false);
  // Find kitchen
  const kitchenId = storesData.find(store => store.kitchen === true);
// Temporary fix
console.log('step 1');
}


// FIX DESDE AQUI
//const token = authResponse.data.token;; // GET TOKEN
//const storeId; // GET STORE ID
//const kitchenId; // GET KITCHEN ID
//const burgerId = "6b6bd5ce9f"; // "6b6bd5ce9f"
//const groupId; // CUAL ES???
// HASTA ACA

async function function1(){
// Sacamos lote de produccion de hamburguesa
const burgerLot = await Products.findOne({
  where: { SKU: burgerId },
  attributes: ["LoteProduccion"],
});
console.log(burgerLot.LoteProduccion);
console.log('step 2');
}
//auxfunc2();

async function function2(){
// For each ingredient in the Formulas table where productid = burgerID
let ingredients = await Formulas.findAll({
  where: { Producto: burgerId },
});
let ingredientsArray = ingredients.map(item => item.toJSON());
console.log(ingredientsArray);
console.log('step 3');
}
//auxfunc3();

const IdealProductionValues = {}; // dict, produccion minima de ingredientes que cumple con requisitos de lote de hamb
const MinimumValues = {}; // dict, cantidad de ingredientes necesarias para hacer 1 lote de hamburg

async function function3(){
//for (let ingredient of ingredientsArray) {
    ingredientsArray.forEach((ingredient) => {
  // Get the production lot and quantity of the ingredient from the Products and Formulas tables
  const runfunct = ingredientLotFinder();
  let ingredientLot = runfunct;
  let ingredientQuantity = ingredient.Cantidad;
  // Calcular cantidad minima de ingrediiente necesaria para producir 1 lote de hamburguesa X
  let z = getLowestZ(ingredientLot.LoteProduccion, ingredientQuantity*burgerLot.LoteProduccion);

  // Add the z value to the dictionary object using the ingredient's name as the key
  IdealProductionValues[ingredient.Ingrediente] = z;
  MinimumValues[ingredient.Ingrediente] = ingredientQuantity*burgerLot.LoteProduccion;
  console.log("STEP 4")
});
}
//auxfunc4();

// Define a function to execute at the scheduled interval
async function checkIngredients() {
    IngredientsAvailable(MinimumValues).then((result) => {
      if (result) {
        moveIngredients(MinimumValues); // Move ingredients if IngredientsAvailable returns true
        generateBurger();
        total += burgerLot.LoteProduccion; // Update the total quantity
        if (total >= 10) {
            clearInterval(interval);
          }
      }
    }).catch((error) => {
      console.error(error);
    });
    generateIngredients(IdealProductionValues); // Generar ingredientes
  }



  async function burger() {
    console.log("START!");
    const result1 = await function0();
    const result2 = await function1();
    const result3 = await function2();
    const result4 = await function3();
    console.log("end!");

  }

  burger();
  
  // Schedule the function to run every 3 minutes
  //const interval = setInterval(checkIngredients, 3 * 60 * 1000);

  /*
// FIINALMENTE, SE LAS ENVIAMOS A OTRO GRUPO
if (total > 9) {
    for (let i = 0; i < 10; i++) {
        await axios.post(
            `https://dev.api-proyecto.2023-1.tallerdeintegracion.cl//warehouse/products/${burgerId}/group`,
            {
            group: groupId
            },
            {
            headers: {
                Authorization: `Bearer ${token}` // ADD TOKEN !!!!!!!!!!
            }
            }
        );
    }
}
*/
