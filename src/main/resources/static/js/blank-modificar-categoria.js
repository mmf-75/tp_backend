var datos = new Vue({
    data: {
        categorias: [],
        cliente: {},
        producto: {}
    },
    created() {
        let datos = JSON.parse(localStorage.getItem("tp-backend-cliente"))
        this.cargaCliente(`http://tp-integrador-back-end.herokuapp.com/api/get/clientes/${datos.cliente}`)
        this.cargaCategorias("http://tp-integrador-back-end.herokuapp.com/api/get/categorias/" + location.search.substring(1))
        this.cargaProducto("http://tp-integrador-back-end.herokuapp.com/api/get/productos/")
    },
    methods: {
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
        modificarCategoria() {
            let nombre=document.getElementById("modificarCategoria").value
          
            categoriaModificada={
                id: this.categorias.id,
                nombre: nombre,
            }
            var url="http://tp-integrador-back-end.herokuapp.com/api/put/categorias"
            const opciones = {
                method: 'PUT',
                body: JSON.stringify(categoriaModificada),
                headers: {
                    'Content-type': 'application/json'
                },
                redirect: 'follow'
            }
            console.log(categoriaModificada);
            fetch(url, opciones)
                  .then(() => window.location.assign("./index-admin.html"))
                    .catch(err => console.log(err))
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
        cargaProducto(url) {
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    this.producto = data
                    console.table(this.producto)
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