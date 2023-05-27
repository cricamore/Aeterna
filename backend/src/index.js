const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const Routes = require("./routes/routes.js")
const cors = require('cors');


const app = express();
const port = process.env.PORT || 4000;

// middlewares
app.use(cors());
app.use(express.json());
app.use('/api', Routes);

// routes
app.get("/", (req, res) => {
    res.send("Hola soy Cristian")
})

// mongodb connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('Conectado a MongoDB Atlas'))
.catch((error) => console.error(error))

app.listen(port, () => console.log('Servidor en el puerto', port))

module.exports = app;