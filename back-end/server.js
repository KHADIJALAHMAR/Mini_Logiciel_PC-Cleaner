const express =require('express')
const fs=require('fs');
const app = express();
const database = require('./src/config/database');


// import  controller
const {getSizeFolder  ,getFilesInDirectory}= require('./src/controller/TraitementController');

// import Model
const {User ,history}= require('./src/models/index')

// import userRoute
const authentificationRoute = require('./src/router/Authenticat');
const traitement =require('./src/router/Traitement');


app.use(express.urlencoded({ extended: true }))
app.use(express.json());

// middleware 

app.use('/auth', authentificationRoute);
app.use('/Analyse', traitement)

// database connection

database.authenticate()
.then(()=>console.log('Database connect'))
.catch(()=> console.log('Error : '+err))


const PORT =5000 || process.env.PORT;
app.listen(PORT ,()=> console.log(`app running on ${PORT} port`));
