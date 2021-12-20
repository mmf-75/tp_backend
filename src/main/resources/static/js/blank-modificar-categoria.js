var datos = new Vue({
    data: {
        categoria: [],
        cliente: {},
        producto: {}
    },
    created() {
        this.cargaCategorias("http://localhost:8080/api/get/categorias/" + location.search.substring(1))
        this.cargaCliente("http://localhost:8080/api/get/clientes/2")
        this.cargaProducto("http://localhost:8080/api/get/productos/")
    },
    methods: {
        modificarCategoria() {
            let nombre=document.getElementById("modificarCategoria").value
          
            categoriaModificada={
                id: this.categoria.id,
                nombre: nombre,
            }
            var url="http://localhost:8080/api/put/categorias"
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
                    this.categoria = data
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