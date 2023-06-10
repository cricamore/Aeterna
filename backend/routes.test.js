const request = require('supertest');
const app = require('./src/index'); // Importa la instancia de tu servidor Express
const userSchema = require('./src/models/user');
const http = require('http');


describe('POST /loginusuario', () => {
  
    it('debería responder con el mensaje "Usuario encontrado" si el usuario existe', async () => {
      // Crea un usuario ficticio para la prueba
      const fakeUser = new userSchema({
        nombre: 'Nombre',
        apellido: 'Apellido',
        email: 'hola@example.com',
        password: '123456',
        progresoArquitectura: [false,false,false,false],
        progresoCultura: [false,false,false,true]
      });
      await fakeUser.save();
  
      // Realiza la solicitud POST al endpoint de login
      const response = await request(app)
        .post('/api/loginusuario')
        .send({ email: 'hola@example.com', password: '123456' });
  
      // Verifica que la respuesta contenga el mensaje esperado
      expect(response.body.message).toEqual('Usuario encontrado');
  
      // Elimina el usuario ficticio después de la prueba
      await userSchema.deleteOne({ email: 'hola@example.com' });
      
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



  describe('POST /guardarprogreso', () => {
    it('debería responder con el mensaje "Progreso guardado exitosamente" si se guarda el progreso correctamente', async () => {
      const email = 'fake@example.com';
      const componente = 'arquitectura';
      const progreso = [true, false, true, false]; // Ejemplo de progreso como array de booleanos
  
      const fakeUser = new userSchema({
        nombre: 'Nombre',
        apellido: 'Apellido',
        email: 'fake@example.com',
        password: '123456',
        progresoArquitectura: [false,false,false,false],
        progresoCultura: [false,false,false,true]
      });
      await fakeUser.save();

      // Realiza la solicitud POST al endpoint de guardar progreso
      const response = await request(app)
        .post('/api/guardarprogreso')
        .send({componente, progreso, email});
  
      // Verifica que la respuesta contenga el mensaje esperado
      expect(response.body.message).toEqual('Progreso guardado exitosamente');

      await userSchema.deleteOne({ email: 'fake@example.com' });
    });
  
    it('debería responder con el mensaje "Usuario no encontrado" si el usuario no existe', async () => {
      const email = 'nonexistent@example.com';
      const componente = 'arquitectura';
      const progreso = [true, false, true]; // Ejemplo de progreso como array de booleanos
  
      // Realiza la solicitud POST al endpoint de guardar progreso con un usuario inexistente
      const response = await request(app)
        .post('/api/guardarprogreso')
        .send({ email, componente, progreso });
  
      // Verifica que la respuesta contenga el mensaje esperado
      expect(response.body.message).toEqual('Usuario no encontrado');
    });
  
    it('debería responder con el mensaje "Componente inválido" si se proporciona un componente inválido', async () => {
      const email = 'fake@example.com';
      const componente = 'invalido';
      const progreso = [true, false, true]; // Ejemplo de progreso como array de booleanos
  
      // Realiza la solicitud POST al endpoint de guardar progreso con un componente inválido
      const response = await request(app)
        .post('/api/guardarprogreso')
        .send({ email, componente, progreso });
  
      // Verifica que la respuesta contenga el mensaje esperado
      expect(response.body.message).toEqual('Componente inválido');
    });
  });




  describe('POST /obtenerprogreso', () => {
    it('debería responder con el progreso del componente de "arquitectura" si el usuario existe', async () => {
      const email = 'fake@example.com';
      const componente = 'arquitectura';
  
      // Crea un usuario ficticio con progreso en el componente de "arquitectura"
      const fakeUser = new userSchema({
        nombre: 'Nombre',
        apellido: 'Apellido',
        email: 'fake@example.com',
        password: '123456',
        progresoArquitectura: [false,false,false,false],
        progresoCultura: [false,false,false,true],
        progresoArte: [false,false,true,false]
      });
      await fakeUser.save();
  
      // Realiza la solicitud POST al endpoint de obtener progreso
      const response = await request(app)
        .post('/api/obtenerprogreso')
        .send({ email, componente });

  
      // Verifica que la respuesta contenga el progreso esperado
      expect(response.body.progreso).toEqual([false,false,false,false]);
  
      // Elimina el usuario ficticio después de la prueba
      await userSchema.deleteOne({ email: 'fake@example.com' });
    });
  
    it('debería responder con el mensaje "Usuario no encontrado" si el usuario no existe', async () => {
      const email = 'nonexistent@example.com';
      const componente = 'arquitectura';
  
      // Realiza la solicitud POST al endpoint de obtener progreso con un usuario inexistente
      const response = await request(app)
        .post('/api/obtenerprogreso')
        .send({ email, componente });
  
      // Verifica que la respuesta contenga el mensaje esperado
      expect(response.body.message).toEqual('Usuario no encontrado');
    });
  
    it('debería responder con el mensaje "Componente inválido" si se proporciona un componente inválido', async () => {
      const email = 'fake@example.com';
      const componente = 'invalido';
  
      // Realiza la solicitud POST al endpoint de obtener progreso con un componente inválido
      const response = await request(app)
        .post('/api/obtenerprogreso')
        .send({ email, componente });
  
      // Verifica que la respuesta contenga el mensaje esperado
      expect(response.body.message).toEqual('Componente inválido');

      await userSchema.deleteOne({ email: 'fake@example.com' });
    });
  });

  



  describe('POST /obtenernombre', () => {
    it('debería responder con el nombre del usuario si el usuario existe', async () => {
      const email = 'fake@example.com';
  
      // Crea un usuario ficticio con un nombre
      const fakeUser = new userSchema({
        nombre: 'Nombre',
        apellido: 'Apellido',
        email: 'fake@example.com',
        password: '123456',
        progresoArquitectura: [false,false,false,false],
        progresoCultura: [false,false,false,true],
        progresoArte: [false,false,true,false]
      });
      await fakeUser.save();
  
      // Realiza la solicitud POST al endpoint de obtener nombre
      const response = await request(app)
        .post('/api/obtenernombre')
        .send({ email });
  
      // Verifica que la respuesta contenga el nombre esperado
      expect(response.body.nombre).toEqual('Nombre');
  
      // Elimina el usuario ficticio después de la prueba
      await userSchema.deleteOne({ email: 'fake@example.com' });
    });
  
    it('debería responder con el mensaje "Usuario no encontrado" si el usuario no existe', async () => {
      const email = 'nonexistent@example.com';
  
      // Realiza la solicitud POST al endpoint de obtener nombre con un usuario inexistente
      const response = await request(app)
        .post('/api/obtenernombre')
        .send({ email });
  
      // Verifica que la respuesta contenga el mensaje esperado
      expect(response.body.message).toEqual('Usuario no encontrado');
    });
  });
  
  
