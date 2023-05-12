const fetch = require("node-fetch");

const AuthorizationToken = async function (req, res) {

  const url = "https://dev.api-proyecto.2023-1.tallerdeintegracion.cl/warehouse/auth";
  const data = {
    group: 18,
    secret: "U%y{jv2HeMJ3da(!nE54TXuh}"
  };
  return new Promise(resolve => {
  fetch(url, {
  method: "POST",
  body: JSON.stringify(data),
  headers: {
    "Content-Type": "application/json"
  }
})
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Error en la solicitud: " + response.statusText);
    }
  })
  .then(result => {
    const token = result.token;
    process.env.TOKEN = token;
    console.log("Token de autorización obtenido");
    resolve();
  })
  .catch(error => {
    console.error("Error:", error);
  });
  });
}; 
module.exports = {
    AuthorizationToken
};
