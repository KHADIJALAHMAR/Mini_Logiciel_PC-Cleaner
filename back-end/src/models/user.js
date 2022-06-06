
const Sequelize = require("sequelize");
const connexion = require('../config/database');

module.exports = connexion.define("users" ,{
id : {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    validate:{
    notEmpty:true,
    }
},
username :{
    type:Sequelize.STRING,
    allowNull :false ,
},
    email :{
    type:Sequelize.STRING,
    allowNull :false 
},

password :{
    type:Sequelize.STRING,
    allowNull :false 
},

});
