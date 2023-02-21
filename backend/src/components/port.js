const express = require('express');
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
//dotenv son variables de ambiente customisadas
//metodo .config() para poder ejecutarlo
require('dotenv').config();
const dataRoutes = require("../routes/data")

const app = express();
//variable de ambiente propia de nodeJS
const port = process.env.PORT || 9000;

//middleware
app.use(express.json());
app.use('/api', dataRoutes);

//routes
app.get("/", (req, res) => {
    res.send("API")
})

//mongodb conection
mongoose.connect(process.env.MONGODB_URI).then(() => console.log("conectado a mongodb atlas")).catch((error) => console.error(error));

app.listen(port, () => console.log('servidor conectado puerto:', port));