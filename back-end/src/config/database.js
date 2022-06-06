// connection database 

const  Sequelize = require('sequelize');

const configDB = require('./config')['database']

module.exports = new Sequelize(
    configDB.database,
    configDB.username,
    configDB.password,
    configDB
)