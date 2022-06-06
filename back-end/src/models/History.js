const Sequelize = require("sequelize");
const connexion = require('../config/database');


module.exports = connexion.define( "histories",{
    time_at: {
        type:Sequelize.DATE,
    },
    size: {
        type:Sequelize.STRING,
    },
}
);