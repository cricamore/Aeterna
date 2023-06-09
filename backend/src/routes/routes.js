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
        req.userEmail = email;
        res.json({ message: 'Usuario encontrado', progreso: user.progreso });
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
      req.userEmail = email;
      res.json({ message: 'Usuario registrado exitosamente', progreso: user.progreso });
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
    const { nombre, apellido, email, password } = req.body;
    userSchema
      .updateOne({_id: id}, {$set: {nombre, apellido, email, password}})
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


router.post('/guardarprogreso', (req, res) => {
  const { componente, progreso, email } = req.body;

  console.log(componente)
  let updateField = {};

  if (componente === 'arquitectura') {
    updateField = { progresoArquitectura: progreso };
  } else if (componente === 'cultura') {
    updateField = { progresoCultura: progreso };
  } else {
    return res.json({ message: 'Componente inválido' });
  }

  userSchema.findOneAndUpdate({ email: email }, updateField, { new: true })
    .then((user) => {
      if (user) {
        res.json({ message: 'Progreso guardado exitosamente' });
      } else {
        res.json({ message: 'Usuario no encontrado' });
      }
    })
    .catch((error) => {
      res.json({ message: error });
    });
});

router.post('/obtenerprogreso', (req, res) => {
  const { componente, email } = req.body;

  let progressField = '';

  if (componente === 'arquitectura') {
    progressField = 'progresoArquitectura';
  } else if (componente === 'cultura') {
    progressField = 'progresoCultura';
  } else {
    return res.json({ message: 'Componente inválido' });
  }

  userSchema.findOne({ email })
    .then((user) => {
      if (user) {
        res.json({ progreso: user[progressField] });
      } else {
        res.json({ message: 'Usuario no encontrado' });
      }
    })
    .catch((error) => {
      res.json({ message: error });
    });
});

module.exports = router;
