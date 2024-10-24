//Dependencies
const morgan = require('morgan');
const express = require('express');
const app = express();
//RoutersS
const pokemon = require('./routes/pokemon');
const user = require('./routes/user');
//Middleware
const auth =require('./middleware/auth');
const notFound = require('./middleware/notFound');
const index = require('./middleware/index');
const cors = require('./middleware/cors');

app.use(cors);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


/*
VERBOS HTTP
GET - obtener recursos
POST - almacenar/crear registros
PUT - modificar un recurso
PATCH - modificar una parte de un recurso
DELETE - borrar un recurso
*/


app.get("/", index);

app.use("/user", user);

app.use(auth);
app.use("/pokemon", pokemon);

app.use(notFound);

app.listen(process.env.PORT || 5000, () =>{
    console.log("Server is running...");
});