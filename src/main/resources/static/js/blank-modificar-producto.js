var datos = new Vue({
    data: {
        categorias: [],
        cliente: {},
        producto: {}
    },
    created() {
        let datos = JSON.parse(localStorage.getItem("tp-backend-cliente"))
        this.cargaCliente(`http://tp-integrador-back-end.herokuapp.com/api/get/clientes/${datos.cliente}`)
        this.cargaCategorias("http://tp-integrador-back-end.herokuapp.com/api/get/categorias/")
        this.cargaProducto("http://tp-integrador-back-end.herokuapp.com/api/get/productos/" + location.search.substring(1))
    },
    methods: {
        nuevoProducto() {
            let nombre=document.getElementById("nuevoNombre").value
            let descripcion=document.getElementById("nuevoDescripcion").value
            let foto=document.getElementById("nuevoFoto").value
            let precio=parseInt(document.getElementById("nuevoPrecio").value)
            let stock=parseInt(document.getElementById("nuevoStock").value)
            let descuento=parseInt(document.getElementById("nuevoDescuento").value)
            let categoria=document.getElementById("nuevoCategoria").value
        
            productoNuevo={
                nombreProducto: nombre,
                descripcion: descripcion,
                fotoProducto: foto,
                precio: precio,
                stock: stock,
                descuento: descuento,
                categoriaModel: {id:categoria}
            }
            var url="http://tp-integrador-back-end.herokuapp.com/api/post/productos"
            const opciones = {
                method: 'POST',
                body: JSON.stringify(productoNuevo),
                headers: {
                    'Content-type': 'application/json'
                },
                redirect: 'follow'
            }
            // console.log(productoNuevo);
            fetch(url, opciones)
                    .then(() => location.reload())
                    .catch(err => console.log(err))
                    .then(() => window.location.assign("./index-admin.html"))
        },
        modificarProducto() {
            let nombre = document.getElementById("modificarNombre").value
            let descripcion = document.getElementById("modificarDescripcion").value
            let foto = document.getElementById("modificarFoto").value
            let precio = parseInt(document.getElementById("modificarPrecio").value)
            let stock = parseInt(document.getElementById("modificarStock").value)
            let descuento = parseInt(document.getElementById("modificarDescuento").value)
            let categoria = parseInt(document.getElementById("modificarCategoria").value)

            productoModificado = {
                id: this.producto.id,
                nombreProducto: nombre,
                descripcion: descripcion,
                fotoProducto: foto,
                precio: precio,
                stock: stock,
                descuento: descuento,
                categoriaModel: { id: categoria }
            }
            var url = "http://tp-integrador-back-end.herokuapp.com/api/put/productos"
            const opciones = {
                method: 'PUT',
                body: JSON.stringify(productoModificado),
                headers: {
                    'Content-type': 'application/json'
                },
                redirect: 'follow'
            }
            // console.log(productoModificado);
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