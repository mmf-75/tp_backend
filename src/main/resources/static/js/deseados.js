var datos = new Vue({
    data: {
        categorias: [],
        cliente: {},
        productos: [],
        deseados: []
    },
    created() {
        this.cargaCategorias("http://localhost:8080/api/get/categorias/")
        let urlCliente = "http://localhost:8080/api/get/clientes/2"
        let urlProductos = "http://localhost:8080/api/get/productos/"
        this.cargaClienteYProductos(urlCliente, urlProductos)
    },
    methods: {
        buscarDeseados(){
            this.cliente.deseados.forEach(deseado => {
                let encontrado = false
                let i = 0
                while (!encontrado && i < this.productos.length) {
                    if(this.productos[i].id == deseado.id){
                        this.deseados.push(this.productos[i])
                    }
                    i++
                }
            });
            console.log(this.deseados);
        },
        cargaClienteYProductos(urlCliente, urlProductos){
            fetch(urlProductos)
                .then(res => res.json())
                .then(data => {
                    this.productos = data
                    console.log(this.productos)
                })
                .catch(err => {
                    console.log(err)
                })
                .then(()=>{
                    fetch(urlCliente)
                    .then(res => res.json())
                    .then(data => {
                        this.cliente = data
                        console.log(data);
                    })
                    .catch(err => {
                        console.log(err)
                    })
                    .then(()=>this.buscarDeseados())
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