const express =require('express')
const app = express()

const database = require('./src/config/database');


// import userRoute
const authentificationRoute = require('./src/router/Authenticat');

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

// middleware 

app.use('/auth', authentificationRoute);


// database connection

database.authenticate()
.then(()=>console.log('Database connect'))
.catch(()=> console.log('Error : '+err))


const PORT =5000 || process.env.PORT;
app.listen(PORT ,()=> console.log(`app running on ${PORT} port`));
