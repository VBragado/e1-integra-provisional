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

let storeId;
let kitchenId;
let LoteBurger;
let ingredientsArray;
let token;

let IdealProductionValues = {}; // dict, produccion minima de ingredientes que cumple con requisitos de lote de hamb
let MinimumValues = {}; // dict, cantidad de ingredientes necesarias para hacer 1 lote de hamburg

function getLowestZ(lote, quantity) {
    let Z = Math.ceil(quantity / lote) * lote; // Z must be a multiple of lote
    while (Z <= quantity) {
      Z += lote; // Z must be greater than quantity
    }
    return Z;
  }

async function function0(){
    // Temporary fix
    // Make a POST request to retrieve the authorization token
    let authResponse = await axios.post('https://dev.api-proyecto.2023-1.tallerdeintegracion.cl/warehouse/auth', 
    {group: 18, secret: 'DtyTZCeKVv9Bj[AN6_'} // ACTUUALMENTE EL DE DESARROLLO. CAMBIAR
    );
    let token = authResponse.data.token;
    // Make a GET request to retrieve stores information
    let storesResponse = await axios.get('https://dev.api-proyecto.2023-1.tallerdeintegracion.cl/warehouse/stores', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      let storesData = storesResponse.data;
      // Find the first store with buffer = false
      let storeId = storesData.find(store => store.buffer === false && store.kitchen === false)._id;
      // Find kitchen
      let kitchenId = storesData.find(store => store.kitchen === true)._id;
    // Temporary fix
    console.log('step 1');
    return { token, storeId, kitchenId } ;
    }

async function function1(){
        // Sacamos lote de produccion de hamburguesa
        const burgerLot = await Products.findOne({
          where: { SKU: burgerId },
          attributes: ["LoteProduccion"],
        });
        let LoteBurger = burgerLot.LoteProduccion;
        console.log(burgerLot.LoteProduccion);
        console.log('step 2');
        return LoteBurger;
        }

async function function2(){
    // For each ingredient in the Formulas table where productid = burgerID
    let ingredients = await Formulas.findAll({
    where: { Producto: burgerId },
    });
    let ingredientsArray = ingredients.map(item => item.toJSON());
    console.log(ingredientsArray);
    console.log('step 3');
    return ingredientsArray;
}

async function function3(ingredientsArray, LoteBurger){
    console.log(ingredientsArray);

    //for (let ingredient of ingredientsArray) {
        for (const ingredient of ingredientsArray) {
            console.log(ingredient);
      // Get the production lot and quantity of the ingredient from the Products and Formulas tables
            let ingredientLot = await Products.findOne({
                where: { SKU: ingredient.Ingrediente },
                attributes: ["LoteProduccion"],
                });
      //let ingredientQuantity = ingredient.Cantidad;
      // Calcular cantidad minima de ingrediiente necesaria para producir 1 lote de hamburguesa X
      let z = getLowestZ(ingredientLot.LoteProduccion, LoteBurger);
    
      // Add the z value to the dictionary object using the ingredient's name as the key
      IdealProductionValues[ingredient.Ingrediente] = z;
      MinimumValues[ingredient.Ingrediente] = LoteBurger;
      console.log("STEP 4");
      //console.log(IdealProductionValues);
      //console.log(MinimumValues);
    };
    return {IdealProductionValues, MinimumValues};

    }

async function IngredientsAvailable(MinimumValues, ingredientsArray, token, storeId) {
    console.log(token);
    console.log(storeId);
    // Make a GET request to retrieve inventory information for the target store
    let inventoryResponse = await axios.get(`https://dev.api-proyecto.2023-1.tallerdeintegracion.cl/warehouse/stores/${storeId}/inventory`, {
      headers: {
        Authorization: `Bearer ${token}`, // ADD TOKEN !!!!!!!!!!
      },
    });
    let inventoryData = inventoryResponse.data;
    console.log("STEP 5");
    for (let ingredient of ingredientsArray) {
        console.log(ingredient);
        let item = inventoryData.find((item) => item.sku === ingredient.Ingrediente);
        if (item) {
            if (item.total < MinimumValues[ingredient.Ingrediente]) {
                console.log(item);
                return false;
            }
          } else {
            console.log(item);
            return false;
          }
        }
    return true;
    }

async function moveIngredients(MinimumValues, token, kitchenId, storeId) {
    // Iterate over the MinimumValues dictionary
    for (let [sku, quantity] of Object.entries(MinimumValues)) { // REVISAR
        console.log("STEP 6");

        let productidlistobject = await axios.get(`https://dev.api-proyecto.2023-1.tallerdeintegracion.cl/warehouse/stores/${storeId}/products?sku=${sku}`, {
            headers: {
            Authorization: `Bearer ${token}`, // ADD TOKEN !!!!!!!!!!
            },
            });
        //console.log(productidlistobject);
        let productids = productidlistobject.data.map(product => product._id);
        console.log(productids[0]);
        for (let i = 0; i < quantity; i++) {
                //let productId = productidlist[i]._id;
                // Do something with the _id here
                console.log(productids[i]);
                try {
                    // Execute the PATCH call for the current productId
                    await axios.patch(`https://dev.api-proyecto.2023-1.tallerdeintegracion.cl/warehouse/products/${productids[i]}`, {
                      store: kitchenId
                    }, {
                      headers: {
                        Authorization: `Bearer ${token}`, // ADD TOKEN!!!!!
                      },
                    });
                    console.log(`Moved ingredient ${productids[i]}`);
                  } catch (error) {
                    console.error(`Error moving ingredient ${productids[i]}: ${error.message}`);
                  }
              }
    }
  }

  // Funcion para generar ingredientes
async function generateIngredients(IdealProductionValues, token) {
    for (let sku in IdealProductionValues) {
      let quantity = IdealProductionValues[sku];
      console.log("GENERATING INGREDIENTS");
      console.log(sku);
      console.log(quantity);
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

  async function generateBurger(burgerID, LoteBurger, token) {
    console.log("GENERATING BURGER");
      console.log(burgerID);
      console.log(LoteBurger);
    await axios.post(
        'https://dev.api-proyecto.2023-1.tallerdeintegracion.cl/warehouse/products',
        {
          sku: burgerID,
          quantity: LoteBurger
        },
        {
          headers: {
            Authorization: `Bearer ${token}` // ADD TOKEN !!!!!!!!!!
          }
        }
      );
  }

  async function burger() {
    const burgerId = "6b6bd5ce9f";
    let total = 0;
    console.log("START!");
    const result1 = await function0();
    const result2 = await function1();
    const result3 = await function2();
    const result4 = await function3(result3, result2);
    console.log(result4.IdealProductionValues);
    // START LOOP
    let result5 = await IngredientsAvailable(result4.MinimumValues, result3, result1.token, result1.storeId);
    console.log(result5);
    if (result5) {
        let result6 = await moveIngredients(result4.MinimumValues, result1.token, result1.kitchenId, result1.storeId);
        let result8 = await generateBurger(burgerId, result2, result1.token);
        total += result2;
    }
    let result7 = await generateIngredients(result4.IdealProductionValues, result1.token);
    console.log("Iteracion");
    console.log(total);
    // END LOOP
    console.log("end!");

  }

  burger();