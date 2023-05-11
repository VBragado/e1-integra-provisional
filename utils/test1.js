const { AuthorizationToken } = require("./auth");
const { getStores } = require("./stores");


const callTest = async function() {
    await AuthorizationToken();
    await getStores();
    };

module.exports = {
    callTest
};