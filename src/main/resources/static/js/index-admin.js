var datos = new Vue({
    data:{
        categorias: [],
        clientes: {},
        productos: []
    },
    created() {
        let datos = JSON.parse(localStorage.getItem("tp-backend-cliente"))
        this.cargaCliente(`http://tp-integrador-back-end.herokuapp.com/api/get/clientes/${datos.cliente}`)
        this.cargaCategorias("http://tp-integrador-back-end.herokuapp.com/api/get/categorias/")
        this.cargaProductos("http://tp-integrador-back-end.herokuapp.com/api/get/productos/")
    },
    methods: {
        eliminarProducto(idProducto){
            var url = "http://tp-integrador-back-end.herokuapp.com/api/delete/productos/" + idProducto
            const opciones = {
                method: 'DELETE'
            }
            fetch(url, opciones)
                .then(() => location.reload())
                .catch(err => console.log(err))
                .then(() => location.reload())        
        },
        mostrarCategoria(idCategoria){
            console.log('hola');
            let productos=document.querySelectorAll(".product")
            let i = 0
            let visibles = 0
            while(i < productos.length) {
                if (idCategoria == productos[i].id && visibles < 5) {
                    productos[i].classList.remove("invisible")
                    visibles++
                    console.log(visibles)
                }else{
                    productos[i].classList.add("invisible")
                }
                i++
            }
        },
        cargaCategorias(url) {
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    this.categorias = data
                    console.log(this.categorias);
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
                    console.log(this.cliente);
                })
                .catch(err => {
                    console.log(err)
                })
        },
        cargaProductos(url) {
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    this.productos = data
                    console.table(this.productos)
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