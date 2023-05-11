const fetch = require("node-fetch");

const AuthorizationToken = function (req, res) {
  const url = "https://dev.api-proyecto.2023-1.tallerdeintegracion.cl/warehouse/auth";
  const data = {
    group: 18,
    secret: "DtyTZCeKVv9Bj[AN6_"
  };

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
    console.log("Token de autorización:", token);
  })
  .catch(error => {
    console.error("Error:", error);
  });
}; 
module.exports = {
    AuthorizationToken
};
