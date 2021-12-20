var datos = new Vue({
    data:{
        categorias: [],
        cliente: {}
    },
    created() {
        let datos = JSON.parse(localStorage.getItem("tp-backend-cliente"))
        this.cargaCliente(`http://localhost:8080/api/get/clientes/${datos.cliente}`)
        this.cargaCategorias("http://localhost:8080/api/get/categorias/")
    },
    methods: {
        cerrarSesion(){
            localStorage.removeItem("tp-backend-cliente")
            window.location.assign("./login3.html")
        },
        modificarCliente(){
            let nombre = document.getElementById("modificarNombre").value
            let apellido = document.getElementById("modificarApellido").value
            let email = document.getElementById("modificarEmail").value
            let fechaNacimiento = document.getElementById("modificarFechaNacimiento").value
            let telefono = parseInt(document.getElementById("modificarTelefono").value)
            let direccion = document.getElementById("modificarDireccion").value
            let localidad = document.getElementById("modificarLocalidad").value
            let provincia = document.getElementById("modificarProvincia").value
            let codigoPostal = document.getElementById("modificarCodigoPostal").value

            clienteModificado = {
                id: this.cliente.id,
                nombre: nombre,
                apellido: apellido,
                email: email,
                fechaNacimiento: fechaNacimiento,
                telefono: telefono,
                direccion: direccion,
                localidad: localidad,
                provincia: provincia,
                codigoPostal: codigoPostal,
                contrasenia: this.cliente.contrasenia,
                ventas: this.cliente.ventas,
                deseados: this.cliente.deseados,
                carrito: this.cliente.carrito,
                administrador: this.cliente.administrador
            }
            var url = "http://localhost:8080/api/put/clientes"
            const opciones = {
                method: 'PUT',
                body: JSON.stringify(clienteModificado),
                headers: {
                    'Content-type': 'application/json'
                },
                redirect: 'follow'
            }
            console.log(clienteModificado);
            fetch(url, opciones)
                .then(() => window.location.assign("./index.html"))
                .catch(err => console.log(err))
        },
        eliminarCliente(idCliente){
                var url = "http://localhost:8080/api/delete/clientes/" + idCliente
                const opciones = {
                    method: 'DELETE'
                }
                fetch(url, opciones)
                    .then(() => location.reload())
                    .catch(err => console.log(err))
                    .then(() => location.reload())
            
        },
        cargaCategorias(url) {
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    this.categorias = data
                })
                .catch(err => {
                    console.log(err)
                })
        },
        cargaCliente(url) {
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    this.cliente = data
                    console.log(data);
                })
                .catch(err => {
                    console.log(err)
                })
        },
    },
})

new Vue({
    el: '#_vue-header'
})

new Vue({
    el: '#_vue-main'
})

new Vue({
    el: '#_vue-footer'
})