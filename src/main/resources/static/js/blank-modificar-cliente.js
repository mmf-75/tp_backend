var datos = new Vue({
    data:{
        categorias: [],
        clientes: {},
        // total: 0,
        // producto: {}
    },
    created() {
        this.cargaCategorias("http://localhost:8080/api/get/categorias/")
        this.cargaCliente("http://localhost:8080/api/get/clientes/")
        // this.cargaProducto("http://localhost:8080/api/get/productos/1")
    },
    methods: {
        nuevoCliente(){
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
            var url="http://localhost:8080/api/post/productos"
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
        eliminarCliente(idCliente){
                var url = "http://localhost:8080/api/delete/clientes/" + idCliente
                const opciones = {
                    method: 'DELETE'
                }
                fetch(url, opciones)
                    .then(() => location.reload())
                    .catch(err => console.log(err))
                    .then(() => location.reload())
            
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
                    this.clientes = data
                    console.log(data);
                })
                // .then(()=>{
                //     for (let i = 0; i < this.cliente.carrito.length; i++) {
                //         this.total += this.cliente.carrito[i].precio
                //     }
                // })
                .catch(err => {
                    console.log(err)
                })
        },
        // cargaProducto(url) {
        //     fetch(url)
        //         .then(res => res.json())
        //         .then(data => {
        //             this.productos = data
        //             console.table(this.productos)
        //         })
        //         .catch(err => {
        //             console.log(err)
        //         })
        // },
        // sacarDelCarrito(idProducto){
        //     const url = `http://localhost:8080/api/${this.cliente.id}/carrito/${idProducto}`
        //     const opciones = {
        //         method: 'DELETE'
        //     }
        //     fetch(url, opciones)
        //         .then(res => res.text())
        //         .then(() => location.reload())
        //         .catch(err => console.error(err))
        // }
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