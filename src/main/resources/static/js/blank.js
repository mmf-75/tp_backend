var datos = new Vue({
    data:{
        categorias: [],
        cliente: {},
        // total: 0,
        // producto: {}
    },
    created() {
        this.cargaCategorias("http://localhost:8080/api/get/categorias/")
        this.cargaCliente("http://localhost:8080/api/get/clientes/2")
        // this.cargaProducto("http://localhost:8080/api/get/productos/1")
    },
    methods: {
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
                // .then(()=>{
                //     for (let i = 0; i < this.cliente.carrito.length; i++) {
                //         this.total += this.cliente.carrito[i].precio
                //     }
                // })
                .catch(err => {
                    console.log(err)
                })
        },
        // cargaProducto(url) {
        //     fetch(url)
        //         .then(res => res.json())
        //         .then(data => {
        //             this.productos = data
        //             console.table(this.productos)
        //         })
        //         .catch(err => {
        //             console.log(err)
        //         })
        // },
        // sacarDelCarrito(idProducto){
        //     const url = `http://localhost:8080/api/${this.cliente.id}/carrito/${idProducto}`
        //     const opciones = {
        //         method: 'DELETE'
        //     }
        //     fetch(url, opciones)
        //         .then(res => res.text())
        //         .then(() => location.reload())
        //         .catch(err => console.error(err))
        // }
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