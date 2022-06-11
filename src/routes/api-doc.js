const express = require("express");
const swaggerJSDoc = require("swagger-jsdoc");
const app = express();

const swaggerDoc = require("swagger-jsdoc")
const swaggerUI = require("swagger-ui-express")

//Documentamos
const swaggerOptions = {
    swaggerDefinition:{
        info:{
            version: "1.0",
            title: "Documentación de apis",
            description: "DSAM",
            servers: ["http://localhost:9000"]
        }
    },
    basePath: "/",
    apis: ["usuarios.js"]
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use("/", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

module.exports = app;