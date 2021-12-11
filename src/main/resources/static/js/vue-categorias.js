const app = new Vue({
    el: "#app-categoria",
    data: {
        categorias: [],
        errored: false,
        loading: true
    },
    created() {
        var url = "http://localhost:8080/api/get/categorias"
        this.fetchData(url);
    },
    methods: {
        fetchData(url) {
            fetch(url)
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
        }
    }
})