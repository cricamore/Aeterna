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

router.post('/loginusuario', (req, res) => {
  const { email, password } = req.body;

  userSchema.findOne({ email, password })
    .then((user) => {
      if (user) {
        // El usuario existe en la base de datos
        res.json({ message: 'Usuario encontrado' });
      } else {
        // El usuario no existe en la base de datos
        res.json({ message: 'Usuario no encontrado' });
      }
    })
    .catch((error) => {
      // Manejo de errores en caso de que ocurra algún problema con la base de datos
      res.json({ message: error });
    });
});

router.post('/registrarusuario', (req, res) => {
  const { nombre, apellido, email, password } = req.body;

  userSchema.create({ nombre, apellido, email, password })
    .then((user) => {
      // El usuario se ha registrado correctamente
      res.json({ message: 'Usuario registrado exitosamente' });
    })
    .catch((error) => {
      // Manejo de errores en caso de que ocurra algún problema con la base de datos
      res.json({ message: error });
    });
});



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
