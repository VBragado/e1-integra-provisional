const fetch = require("node-fetch");
require("dotenv").config();

const getStores = async function (req, res) {
  const url = "https://dev.api-proyecto.2023-1.tallerdeintegracion.cl/warehouse/stores";
  
  await fetch(url, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${process.env.TOKEN}`,
      "Content-Type": "application/json"
    }
  })
  .then(response => {
    console.log(`Bearer ${process.env.TOKEN}`);
    console
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Error en la solicitud: " + response.statusText);
    }
  })
  .then(result => {
    const ACA = result;
    console.log("Token de autorización obtenido", ACA);
  })
  .catch(error => {
    console.error("Error:", error);
  });
}; 
module.exports = {
    getStores
};
