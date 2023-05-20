async function createUser_Front(nombre, apellido, email, password) {
    try {
        const response = await fetch(`http://localhost:4000/api/usuarios`, {
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
        const response = await fetch(`http://localhost:4000/api/loginusuario`, {
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
            console.log(JSON.stringify(data))
            alert('Logueado con email: ' + email +' y contraseña ' + password);
            console.log('soy el data' + data)
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

export {
    createUser_Front,
    login_usuario
}