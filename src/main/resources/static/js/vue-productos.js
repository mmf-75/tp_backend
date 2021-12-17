const app = new Vue({
    el: "#app",
    data: {
        productos: [],
        categorias: [],
        errored: false,
        loading: true
    },
    created() {
        var url = "http://localhost:8080/api/get/productos"

        this.fetchData(url);
        this.fetchData1(url1);
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.productos = data;
                    console.log(data);
                    this.loading = false;
                    console.log(this.loading);
                    var url1 = "http://localhost:8080/api/get/categorias"
                    fetch(url1)
                        .then(response => response.json())
                        .then(data => {
                            this.categorias = data;
                            console.log(data);
                            this.loading = false;
                            console.log(this.loading);
                        })
                        .catch(err => {
                            this.errored = true
                            console.error(err);
                        })
                })
                .catch(err => {
                    this.errored = true
                    console.error(err);
                })
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
        }



    }
})

