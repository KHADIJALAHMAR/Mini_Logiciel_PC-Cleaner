const history = require('./History');
const User =require('./user');
const connexion= require('../config/database');


connexion.sync({alter:true}).then(() => {
    console.log("Table Created !");
});

module.exports ={
    history,
    User
}