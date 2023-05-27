const request = require('supertest');
const app = require('./src/index'); // Importa la instancia de tu servidor Express
const userSchema = require('./src/models/user');

describe('POST /loginusuario', () => {
    it('debería responder con el mensaje "Usuario encontrado" si el usuario existe', async () => {
      // Crea un usuario ficticio para la prueba
      const fakeUser = new userSchema({
        nombre: 'Nombre',
        apellido: 'Apellido',
        email: 'fake@example.com',
        password: '123456'
      });
      await fakeUser.save();
  
      // Realiza la solicitud POST al endpoint de login
      const response = await request(app)
        .post('/api/loginusuario')
        .send({ email: 'fake@example.com', password: '123456' });
  
      // Verifica que la respuesta contenga el mensaje esperado
      expect(response.body.message).toEqual('Usuario encontrado');
  
      // Elimina el usuario ficticio después de la prueba
      await userSchema.deleteOne({ email: 'fake@example.com' });
      
    }, 10000); // Aumenta el tiempo de espera a 10 segundos (10000 ms)
  
    it('debería responder con el mensaje "Usuario no encontrado" si el usuario no existe', async () => {
      // Realiza la solicitud POST al endpoint de login con un usuario inexistente
      const response = await request(app)
        .post('/api/loginusuario')
        .send({ email: 'nonexistent@example.com', password: 'password' });
  
      // Verifica que la respuesta contenga el mensaje esperado
      expect(response.body.message).toBe('Usuario no encontrado');
      
    });
  });
  
  describe('POST /registrarusuario', () => {
    it('debería responder con el mensaje "Usuario registrado exitosamente" si el registro es exitoso', async () => {
      // Realiza la solicitud POST al endpoint de registro
      const response = await request(app)
        .post('/api/registrarusuario')
        .send({
          nombre: 'John',
          apellido: 'Doe',
          email: 'johndoe@example.com',
          password: 'password123'
        });
  
      // Verifica que la respuesta contenga el mensaje esperado
      expect(response.body.message).toEqual('Usuario registrado exitosamente');
  
      // Elimina el usuario creado después de la prueba (opcional)
      await userSchema.deleteOne({ email: 'johndoe@example.com' });
    });
  
    it('debería responder con el mensaje de error si el registro falla', async () => {
      // Realiza la solicitud POST al endpoint de registro con datos inválidos
      const response = await request(app)
        .post('/api/registrarusuario')
        .send({
          nombre: 'John',
          apellido: 'Doe',
          email: 'johndoe@example.com' // faltan otros campos requeridos
        });
  
      // Verifica que la respuesta contenga el mensaje de error esperado
      expect(response.body.message).toBeDefined();
    });
  });
