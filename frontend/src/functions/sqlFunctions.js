async function createUser_Front(nombre, apellido, email, password) {
    try {
        const response = await fetch(`http://aeterna-production.up.railway.app/api/registrarusuario`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nombre,
                apellido,
                email,
                password
            }),
        });

        const data = await response.json(); // convierte la respuesta del servidor a JSON

        if(response.status === 200) {
            alert(data.message);
            return data.message
        } else {
            alert("Ha ocurrido un error.");
        }

        // maneja la respuesta del servidor según sea necesario
        console.log(data);

    } catch (error) {
        // maneja cualquier error que se produzca al enviar la solicitud
        console.error(error);
    }
}

async function login_usuario(email, password) {
    console.log(email)
    try {
        const response = await fetch(`http://aeterna-production.up.railway.app/api/loginusuario`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password
            }),
        });

        const data = await response.json(); // convierte la respuesta del servidor a JSON

        if(response.status === 200) {
            return data.message;
        } else {
            alert("Ha ocurrido un error.");
            return data.message;
        }

        // maneja la respuesta del servidor según sea necesario
        console.log(data);

    } catch (error) {
        // maneja cualquier error que se produzca al enviar la solicitud
        console.error(error);
    }
}

async function obtenerProgreso(componente,email) {
    console.log("componente",componente)
    console.log("aaa",email)
    try {
      const response = await fetch(`http://aeterna-production.up.railway.app/api/obtenerprogreso`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          componente,
          email
        }),
      });
  
      const data = await response.json(); // convierte la respuesta del servidor a JSON
  
      if (response.status === 200) {
        console.log('entré2')
        console.log(data.progreso);
        return data
      } else {
        console.error('Ha ocurrido un error.');
      }
  
      // maneja la respuesta del servidor según sea necesario
      console.log(data);
  
    } catch (error) {
      // maneja cualquier error que se produzca al enviar la solicitud
      console.error(error);
    }
  }
  
  async function guardarProgreso(componente,email,progreso) {
    console.log("componente2",componente)
    console.log("guardar",email)
    try {
      const response = await fetch(`http://aeterna-production.up.railway.app/api/guardarprogreso`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          componente,
          email,
          progreso
        }),
      });
  
      const data = await response.json(); // convierte la respuesta del servidor a JSON
  
      if (response.status === 200) {
        console.log(data.message);
        return data;
      } else {
        console.error('Ha ocurrido un error.');
      }
  
      // maneja la respuesta del servidor según sea necesario
      console.log(data);
  
    } catch (error) {
      // maneja cualquier error que se produzca al enviar la solicitud
      console.error(error);
    }
  }

  async function obtenerNombre(email) {
    console.log("guardar",email)
    try {
      const response = await fetch(`http://aeterna-production.up.railway.app/api/obtenernombre`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email
        }),
      });
  
      const data = await response.json(); // convierte la respuesta del servidor a JSON
  
      if (response.status === 200) {
        console.log(data.message);
        return data.nombre;
      } else {
        console.error('Ha ocurrido un error.');
      }
  
      // maneja la respuesta del servidor según sea necesario
      console.log(data);
  
    } catch (error) {
      // maneja cualquier error que se produzca al enviar la solicitud
      console.error(error);
    }
  }
  

export {
    createUser_Front,
    login_usuario,
    guardarProgreso,
    obtenerProgreso,
    obtenerNombre
}
