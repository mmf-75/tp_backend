var datos = new Vue({
    data: {
        categorias: [],
        cliente: {},
        total: 0,
    },
    created() {
        this.cargaCategorias("http://localhost:8080/api/get/categorias/")
        this.cargaCliente("http://localhost:8080/api/get/clientes/2")
    },
    methods: {
        comprar() {
            let date = new Date()
            let fechaActual = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`

            let newPost = []

            this.cliente.carrito.forEach(producto => {
                const nuevaVenta = {
                    fechaCompra: fechaActual,
                    fechaEntraga: "Entrega en proceso",
                    precioFinal: Math.round(producto.precio - (producto.precio * producto.descuento / 100)),
                    clientesModel: {
                        id: 2
                    },
                    productosModel: {
                        id: producto.id
                    }
                }
                newPost.push(nuevaVenta)
            });

            console.log(newPost);

            const url = 'http://localhost:8080/api/post/ventas/'

            const opciones = {
                method: 'POST',
                body: JSON.stringify(newPost),
                headers: {
                    'Content-type': 'application/json'
                }
            }

            fetch(url, opciones)

                .then(() => {
                    fetch('http://localhost:8080/api/2/carrito/all', { method: 'DELETE' })
                        .then(() => window.location.assign("./historial.html"))
                        .catch(err => console.error(err))
                })
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
                    for (let i = 0; i < this.cliente.carrito.length; i++) {
                        let producto = this.cliente.carrito[i]
                        this.total += Math.round(producto.precio - (producto.descuento * producto.precio / 100))
                    }
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