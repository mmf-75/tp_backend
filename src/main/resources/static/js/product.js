var datos = new Vue({
    data: {
        categorias: [],
        cliente: {},
        producto: {}
    },
    created() {
        if (localStorage.getItem("tp-backend-cliente")) {
            let datos = JSON.parse(localStorage.getItem("tp-backend-cliente"))
            this.cargaCliente(`http://localhost:8080/api/get/clientes/${datos.cliente}`)
        }
        this.cargaCategorias("http://localhost:8080/api/get/categorias/")
        let id = location.search.substring(1)
        id == '' ? id = 1 : ''
        this.cargaProducto(`http://localhost:8080/api/get/productos/${id}`)
    },
    methods: {
        miCuenta() {
            if (localStorage.getItem("tp-backend-cliente")) {
                window.location.assign("./modificar-cliente.html")
            }
            else {
                window.location.assign("./login3.html")
            }
        },
        deseado() {
            if (!localStorage.getItem("tp-backend-cliente")) {
                window.location.assign("./login3.html")
            } else {
                let yaDeseado = false
                this.cliente.deseados.forEach(productoDeseado => {
                    if (this.producto.id === productoDeseado.id) {
                        yaDeseado = true
                    }
                })
                const url = `http://localhost:8080/api/2/deseados/${this.producto.id}`
                let opciones
                if (yaDeseado) {
                    opciones = {
                        method: 'DELETE',
                    }
                }
                else {
                    opciones = {
                        method: 'PUT',
                    }
                }
                fetch(url, opciones)
                    .then(() => location.reload())
                    .catch(err => console.error(err))
            }
        },
        alCarrito() {
            const url = `http://localhost:8080/api/2/carrito/${this.producto.id}`
            const opciones = {
                method: 'PUT',
            }
            fetch(url, opciones)
                .then(() => window.location.assign("./checkout.html"))
                .catch(err => console.error(err))
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
                .then(() => {
                    this.cliente.deseados.forEach(productoDeseado => {
                        if (this.producto.id === productoDeseado.id) {
                            document.querySelector('._boton-deseado').classList.add('_deseado')
                        }
                    })
                })
                .catch(err => {
                    console.log(err)
                })
        },
        cargaProducto(url) {
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    this.producto = data
                    console.log(this.producto)
                })
                .catch(err => {
                    console.log(err)
                })
        },
        sacarDelCarrito(idProducto) {
            const url = `http://localhost:8080/api/${this.cliente.id}/carrito/${idProducto}`
            const opciones = {
                method: 'DELETE'
            }
            fetch(url, opciones)
                .then(res => res.text())
                .then(() => location.reload())
                .catch(err => console.error(err))
        }
    }
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