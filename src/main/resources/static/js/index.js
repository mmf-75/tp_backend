var datos = new Vue({
    data: {
        categorias: [],
        cliente: {},
    },
    created() {
        let datos = JSON.parse(localStorage.getItem("tp-backend-cliente"))
        this.cargaCliente(`http://localhost:8080/api/get/clientes/${datos.cliente}`)
        this.cargaCategorias("http://localhost:8080/api/get/categorias/")
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
                .then(() => {
                    if (this.cliente.administrador)
                        window.location.assign("./index-admin.html")
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

// new Vue({
//     el: '#_vue-main'
// })

new Vue({
    el: '#_vue-footer'
})