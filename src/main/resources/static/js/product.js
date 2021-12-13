var app = new Vue({
    el: '#app',
    data: {
        productos: []
    },
    created() {
        this.cargaDatos("http://localhost:8080/api/get/productos/1")
    },
    methods: {
        cargaDatos(url) {
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    this.productos = data
                    console.table(this.productos)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }
})