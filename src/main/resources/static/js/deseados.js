var datos = new Vue({
    data: {
        categorias: [],
        cliente: {},
        productos: [],
        deseados: []
    },
    created() {
        if (!localStorage.getItem("tp-backend-cliente")) {
            window.location.assign("./login3.html")
        }
        else {
            this.cargaCategorias("https://tp-integrador-back-end.herokuapp.com/api/get/categorias/")
            let datos = JSON.parse(localStorage.getItem("tp-backend-cliente"))
            let urlCliente = `https://tp-integrador-back-end.herokuapp.com/api/get/clientes/${datos.cliente}`
            let urlProductos = "https://tp-integrador-back-end.herokuapp.com/api/get/productos/"
            this.cargaClienteYProductos(urlCliente, urlProductos)
        }
    },
    methods: {
        miCuenta(){
            if (localStorage.getItem("tp-backend-cliente")) {
                window.location.assign("./modificar-cliente.html")
            }
            else{
                window.location.assign("./login3.html")
            }
        },
        buscarDeseados() {
            this.cliente.deseados.forEach(deseado => {
                let encontrado = false
                let i = 0
                while (!encontrado && i < this.productos.length) {
                    if (this.productos[i].id == deseado.id) {
                        this.deseados.push(this.productos[i])
                    }
                    i++
                }
            });
            console.log(this.deseados);
        },
        cargaClienteYProductos(urlCliente, urlProductos) {
            fetch(urlProductos)
                .then(res => res.json())
                .then(data => {
                    this.productos = data
                    console.log(this.productos)
                })
                .catch(err => {
                    console.log(err)
                })
                .then(() => {
                    fetch(urlCliente)
                        .then(res => res.json())
                        .then(data => {
                            this.cliente = data
                            console.log(data);
                        })
                        .catch(err => {
                            console.log(err)
                        })
                        .then(() => this.buscarDeseados())
                })
        },
        verDetalles(idProducto) {
            let url = `./product.html?${idProducto}`
            window.location.assign(url)
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