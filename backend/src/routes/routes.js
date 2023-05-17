const express = require("express");
const userSchema = require("../models/user");

const router = express.Router();

//create user
router.post('/usuarios', (req, res) => {
    const user = userSchema(req.body);
    user
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({message: error}));
})

//get all users
router.get('/usuarios', (req, res) => {
    userSchema
      .find()
      .then((data) => res.json(data))
      .catch((error) => res.json({message: error}));
})

//get an user
router.get('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    userSchema
      .findById(id)
      .then((data) => res.json(data))
      .catch((error) => res.json({message: error}));
})

//update an user
router.put('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, apellido, email, cedula } = req.body;
    userSchema
      .updateOne({_id: id}, {$set: {nombre, apellido, email, cedula}})
      .then((data) => res.json(data))
      .catch((error) => res.json({message: error}));
})

//delete an user
router.delete('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    userSchema
      .deleteOne({_id: id})
      .then((data) => res.json(data))
      .catch((error) => res.json({message: error}));
})



module.exports = router;