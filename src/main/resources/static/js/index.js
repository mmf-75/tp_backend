var datos = new Vue({
    data: {
        categorias: [],
        cliente: {},
    },
    created() {
        if (localStorage.getItem("tp-backend-cliente")) {
            let datos = JSON.parse(localStorage.getItem("tp-backend-cliente"))
            this.cargaCliente(`https://tp-integrador-back-end.herokuapp.com/api/get/clientes/${datos.cliente}`)
        }
        this.cargaCategorias("https://tp-integrador-back-end.herokuapp.com/api/get/categorias/")
    },
    methods: {
        miCuenta(){
            if (localStorage.getItem("tp-backend-cliente")) {
                window.location.assign("./modificar-cliente.html")
            }
            else{
                window.location.assign("./login3.html")
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
    }
})

new Vue({
    el: '#_vue-header'
})

new Vue({
    el: '#_vue-footer'
})