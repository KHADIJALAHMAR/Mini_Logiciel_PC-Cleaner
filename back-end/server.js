const express =require('express')
const app = express()

const database = require('./src/config/database');


database.authenticate()
.then(()=>console.log('Database connect'))
.catch(()=> console.log('Error : '+err))


const PORT =4000 || process.env.PORT;
app.listen(PORT ,()=> console.log(`app running on ${PORT} port`));
