const app = new Vue({
    el: "#app-producto",
    data: {
        productos: [],
        errored: false,
        loading: true
    },
    created() {
        var url = "http://localhost:8080/api/get/productos"
        this.fetchData(url);
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
                })
                .catch(err => {
                    this.errored = true
                    console.error(err);
                })
        }
    }
})

