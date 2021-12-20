var datos = new Vue({
    data:{
        categorias: [],
        clientes: {},
        productos: []
    },
    created() {
        let datos = JSON.parse(localStorage.getItem("tp-backend-cliente"))
        this.cargaCliente(`http://localhost:8080/api/get/clientes/${datos.cliente}`)
        this.cargaCategorias("http://localhost:8080/api/get/categorias/")
        this.cargaProductos("http://localhost:8080/api/get/productos/")
    },
    methods: {
        eliminarProducto(idProducto){
            var url = "http://localhost:8080/api/delete/productos/" + idProducto
            const opciones = {
                method: 'DELETE'
            }
            fetch(url, opciones)
                .then(() => location.reload())
                .catch(err => console.log(err))
                .then(() => location.reload())        
        },
        mostrarCategoria(idCategoria){
            let productos=document.querySelectorAll(".product")

            for (let i = 0; i < productos.length; i++) {
                if (idCategoria!=productos[i].id) {
                    productos[i].classList.add("invisible")
                }else{
                    productos[i].classList.remove("invisible")
                }
            }
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