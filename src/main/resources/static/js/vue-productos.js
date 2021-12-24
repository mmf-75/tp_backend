const app = new Vue({
    el: "#app",
    data: {
        productos: [],
        categorias: [],
    },
    created() {
        var url = "https://tp-integrador-back-end.herokuapp.com/api/get/productos"
        this.fetchData(url)
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.productos = data;
                    var url1 = "https://tp-integrador-back-end.herokuapp.com/api/get/categorias"
                    fetch(url1)
                        .then(response => response.json())
                        .then(data => {
                            this.categorias = data;
                        })
                        .catch(err => {
                            console.error(err);
                        })
                })
                .catch(err => {
                    console.error(err);
                })
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
                // console.log(visibles);
            }
        },

        eliminarProducto(idProducto){
            var url = "https://tp-integrador-back-end.herokuapp.com/api/delete/productos/" + idProducto
            const opciones = {
                method: 'DELETE'
            }
            fetch(url, opciones)
                .then(() => location.reload())
                .catch(err => console.log(err))
                .then(() => location.reload())        
        },

        eliminarCategoria(idCategoria){
            var url = "https://tp-integrador-back-end.herokuapp.com/api/delete/categorias/" + idCategoria
            const opciones = {
                method: 'DELETE'
            }
            fetch(url, opciones)
                .then(() => location.reload())
                .catch(err => console.log(err))
                .then(() => location.reload())
        }
    }
})

