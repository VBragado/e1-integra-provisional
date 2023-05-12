'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "Formulas", deps: []
 * createTable "Orders", deps: []
 * createTable "Products", deps: []
 * createTable "Stocks", deps: []
 *
 **/

var info = {
    "revision": 1,
    "name": "noname",
    "created": "2023-05-12T07:05:31.659Z",
    "comment": ""
};

var migrationCommands = function(transaction) {
    return [{
            fn: "createTable",
            params: [
                "Formulas",
                {
                    "id": {
                        "type": Sequelize.STRING,
                        "field": "id",
                        "primaryKey": true,
                        "allowNull": false
                    },
                    "Producto": {
                        "type": Sequelize.STRING,
                        "field": "Producto",
                        "allowNull": false
                    },
                    "Ingrediente": {
                        "type": Sequelize.STRING,
                        "field": "Ingrediente",
                        "allowNull": false
                    },
                    "Cantidad": {
                        "type": Sequelize.INTEGER,
                        "field": "Cantidad",
                        "allowNull": false
                    }
                },
                {
                    "transaction": transaction
                }
            ]
        },
        {
            fn: "createTable",
            params: [
                "Orders",
                {
                    "id": {
                        "type": Sequelize.STRING,
                        "field": "id",
                        "primaryKey": true,
                        "allowNull": false
                    },
                    "cliente": {
                        "type": Sequelize.STRING,
                        "field": "cliente",
                        "allowNull": false
                    },
                    "sku": {
                        "type": Sequelize.STRING,
                        "field": "sku",
                        "allowNull": false
                    },
                    "fechaEntrega": {
                        "type": Sequelize.BIGINT,
                        "field": "fechaEntrega",
                        "allowNull": false
                    },
                    "cantidad": {
                        "type": Sequelize.INTEGER,
                        "field": "cantidad",
                        "allowNull": false
                    },
                    "urlNotificacion": {
                        "type": Sequelize.STRING,
                        "field": "urlNotificacion",
                        "allowNull": false
                    },
                    "estado": {
                        "type": Sequelize.STRING,
                        "field": "estado",
                        "allowNull": false
                    },
                    "createdAt": {
                        "type": Sequelize.DATE,
                        "field": "createdAt",
                        "allowNull": false
                    },
                    "updatedAt": {
                        "type": Sequelize.DATE,
                        "field": "updatedAt",
                        "allowNull": false
                    }
                },
                {
                    "transaction": transaction
                }
            ]
        },
        {
            fn: "createTable",
            params: [
                "Products",
                {
                    "id": {
                        "type": Sequelize.STRING,
                        "field": "id",
                        "primaryKey": true,
                        "allowNull": false
                    },
                    "SKU": {
                        "type": Sequelize.STRING,
                        "field": "SKU",
                        "allowNull": false
                    },
                    "LoteProduccion": {
                        "type": Sequelize.INTEGER,
                        "field": "LoteProduccion",
                        "allowNull": false
                    },
                    "Costo": {
                        "type": Sequelize.INTEGER,
                        "field": "Costo",
                        "allowNull": false
                    },
                    "Tiempo": {
                        "type": Sequelize.INTEGER,
                        "field": "Tiempo",
                        "allowNull": false
                    }
                },
                {
                    "transaction": transaction
                }
            ]
        },
        {
            fn: "createTable",
            params: [
                "Stocks",
                {
                    "id": {
                        "type": Sequelize.UUID,
                        "field": "id",
                        "defaultValue": Sequelize.UUIDV4,
                        "primaryKey": true
                    },
                    "sku": {
                        "type": Sequelize.STRING,
                        "field": "sku",
                        "allowNull": false
                    },
                    "precio": {
                        "type": Sequelize.INTEGER,
                        "field": "precio",
                        "allowNull": false
                    },
                    "vencimiento": {
                        "type": Sequelize.INTEGER,
                        "field": "vencimiento",
                        "allowNull": false
                    },
                    "lotes": {
                        "type": Sequelize.INTEGER,
                        "field": "lotes",
                        "allowNull": false
                    },
                    "tiempo_prod": {
                        "type": Sequelize.INTEGER,
                        "field": "tiempo_prod",
                        "allowNull": false
                    },
                    "createdAt": {
                        "type": Sequelize.DATE,
                        "field": "createdAt",
                        "allowNull": false
                    },
                    "updatedAt": {
                        "type": Sequelize.DATE,
                        "field": "updatedAt",
                        "allowNull": false
                    }
                },
                {
                    "transaction": transaction
                }
            ]
        }
    ];
};
var rollbackCommands = function(transaction) {
    return [{
            fn: "dropTable",
            params: ["Formulas", {
                transaction: transaction
            }]
        },
        {
            fn: "dropTable",
            params: ["Orders", {
                transaction: transaction
            }]
        },
        {
            fn: "dropTable",
            params: ["Products", {
                transaction: transaction
            }]
        },
        {
            fn: "dropTable",
            params: ["Stocks", {
                transaction: transaction
            }]
        }
    ];
};

module.exports = {
    pos: 0,
    useTransaction: true,
    execute: function(queryInterface, Sequelize, _commands)
    {
        var index = this.pos;
        function run(transaction) {
            const commands = _commands(transaction);
            return new Promise(function(resolve, reject) {
                function next() {
                    if (index < commands.length)
                    {
                        let command = commands[index];
                        console.log("[#"+index+"] execute: " + command.fn);
                        index++;
                        queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                    }
                    else
                        resolve();
                }
                next();
            });
        }
        if (this.useTransaction) {
            return queryInterface.sequelize.transaction(run);
        } else {
            return run(null);
        }
    },
    up: function(queryInterface, Sequelize)
    {
        return this.execute(queryInterface, Sequelize, migrationCommands);
    },
    down: function(queryInterface, Sequelize)
    {
        return this.execute(queryInterface, Sequelize, rollbackCommands);
    },
    info: info
};
