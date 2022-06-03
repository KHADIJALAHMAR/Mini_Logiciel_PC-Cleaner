const express =require('express')
const fs=require('fs');
const app = express();

const database = require('./src/config/database');
const {getSizeFolder}= require('./src/controller/TraitementController');

// import userRoute
const authentificationRoute = require('./src/router/Authenticat');


app.use(express.urlencoded({ extended: true }))
app.use(express.json());

// middleware 

app.use('/auth', authentificationRoute);

getSizeFolder()
// database connection

database.authenticate()
.then(()=>console.log('Database connect'))
.catch(()=> console.log('Error : '+err))


const PORT =5000 || process.env.PORT;
app.listen(PORT ,()=> console.log(`app running on ${PORT} port`));
