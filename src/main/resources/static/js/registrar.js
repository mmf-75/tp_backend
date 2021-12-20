async function registrarUsuario() {

    let datos = {
        nombre: document.getElementById('txtNombre').value,
        apellido: document.getElementById('txtApellido').value,
        fechaNacimiento: document.getElementById('txtFecha_Nacimiento').value,
        email: document.getElementById('txtEmail').value,
        telefono: document.getElementById('txtTelefono').value,
        contrasenia: document.getElementById('txtPassword').value,
        provincia: document.getElementById('txtProvincia').value,
        localidad: document.getElementById('txtLocalidad').value,
        codigoPostal: document.getElementById('txtCodigo_Postal').value,
        direccion: document.getElementById('txtDireccion').value
    };

    let repetirPassword = document.getElementById('txtRepetirPassword').value;

    if (repetirPassword == datos.contrasenia) {

        let url = 'http://localhost:8080/api/post/clientes'

        let opciones = {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }

        fetch(url, opciones)
            .then(res => res.text())
            .then(data => console.log(data))
            .then(() => window.location.href = './login.html')
            .catch(err => console.log(err))
    }
    else {
        alert("Las constraseñas no coinciden!!!");
    }
}
