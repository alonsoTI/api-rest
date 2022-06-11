const express = require("express");
const router = express.Router();
const userModel = require("../models/usuarios")

//crear usuario
router.post("/usuarios", (req, res) => {
    const user = userModel(req.body);
    console.log(user);
    user
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});

/**
 * @swagger
 * /api/usuarios:
 * get:
 *      summary: Get by ID
 *      description: ejemplo
 *      produces:
 *          - application/json
 *      parameters:
 *          - in: path
 *            name: id
 *            description: id del usuario
 *      responses:
 *          200:
 *              description: bla
 *              schema: json
 *              type: json
 * 
 * 
 */
router.get("/usuarios", (req, res) => {
    userModel.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//GetById
router.get("/usuarios/:id", (req, res) => {
    const {id} = req.params;
    userModel
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//Actualizar
router.put("/usuarios/:id", (req, res) => {
    const {id} = req.params;
    const {nombre, edad, correo} = req.body;
    userModel
    .updateOne({_id: id}, {$set: {nombre, edad, correo}})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

router.delete("/usuarios/:id", (req, res) => {
    const {id} = req.params;
    userModel
    .deleteOne({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

module.exports = router;
