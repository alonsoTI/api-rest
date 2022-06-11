const express = require('express');
const mongoose = require('mongoose');
const usuarios = require("./routes/usuarios")
require("dotenv").config();

const app = express();
const port = 9000;

//middlelware
app.use(express.json());
app.use("/api", usuarios);

//rutas
app.get('/', (req, res) => {
    res.send("Bienvenido al API Rest");
})

//conexion mongo
mongoose.connect(process.env.mongodb_uri)
.then(() => console.log("Conexión exitosa") )
.catch((error) => console.log(error));

//Servidor
app.listen(9000, () => console.log("Servidor escuchando en el puerto",port));

