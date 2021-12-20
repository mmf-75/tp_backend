var datos = new Vue({
    methods: {
        registrarse() {

            let txtNombre = document.querySelector('#_nombre')
            let txtApellido = document.querySelector('#_apellido')
            let txtFN = document.querySelector('#_fecha-nacimiento')
            let txtEmail = document.querySelector('#_email')
            let txtContrasenia = document.querySelector('#_contrasenia')
            let txtTelefono = document.querySelector('#_telefono')
            let txtProvincia = document.querySelector('#_provincia')
            let txtLocalidad = document.querySelector('#_localidad')
            let txtDireccion = document.querySelector('#_direccion')
            let txtCP = document.querySelector('#_cod-postal')

            let newCliente = {
                nombre: txtNombre.value,
                apellido: txtApellido.value,
                fechaNacimiento: txtFN.value,
                email: txtEmail.value,
                contrasenia: txtContrasenia.value,
                telefono: parseInt(txtTelefono.value),
                provincia: txtProvincia.value,
                localidad: txtLocalidad.value,
                direccion: txtDireccion.value,
                codigoPostal: txtCP.value,
                administrador: false
            }

            let url = "http://localhost:8080/api/post/clientes"

            let opciones = {
                method: 'POST',
                body: JSON.stringify(newCliente),
                headers: {
                    'Content-type': 'application/json'
                }
            }

            fetch(url, opciones)
                .then(res => res.text())
                .then(data => {
                    let aux = {
                        cliente: JSON.parse(data).id,
                        conectado: true
                    }
                    console.table(aux)
                    localStorage.setItem("tp-backend-cliente", JSON.stringify(aux))
                })
                .then(() => window.location.assign("./index.html"))
                .catch(err => console.log(err))
        }
    }
})

new Vue({
    el: '#_vue-main'
})

