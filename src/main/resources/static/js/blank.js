var datos = new Vue({
    data:{
        categorias: [],
        cliente: {},
        // total: 0,
        // producto: {}
    },
    created() {
        this.cargaCategorias("https://tp-integrador-back-end.herokuapp.com/api/get/categorias/")
        this.cargaCliente("https://tp-integrador-back-end.herokuapp.com/api/get/clientes/2")
        // this.cargaProducto("https://tp-integrador-back-end.herokuapp.com/api/get/productos/1")
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
        //     const url = `https://tp-integrador-back-end.herokuapp.com/api/${this.cliente.id}/carrito/${idProducto}`
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