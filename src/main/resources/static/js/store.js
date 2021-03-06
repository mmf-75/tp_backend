var datos = new Vue({
    data: {
        categorias: [],
        cliente: {},
        productos: []
    },
    created() {
        if (localStorage.getItem("tp-backend-cliente")) {
            let datos = JSON.parse(localStorage.getItem("tp-backend-cliente"))
            this.cargaCliente(`https://tp-integrador-back-end.herokuapp.com/api/get/clientes/${datos.cliente}`)
        }
        this.cargaCategorias("https://tp-integrador-back-end.herokuapp.com/api/get/categorias/")
        this.cargaProductos("https://tp-integrador-back-end.herokuapp.com/api/get/productos")
    },
    methods: {
        buscarPorNombre() {
            let buscador = document.querySelector('#_buscador')
            console.dir(buscador.value)
            let idProductoBuscado
            this.productos.forEach(producto => {
                if (producto.nombreProducto == buscador.value)
                    idProductoBuscado = producto.id
            });
            console.log(idProductoBuscado);
            this.verDetalles(idProductoBuscado)
        },
        miCuenta() {
            if (localStorage.getItem("tp-backend-cliente")) {
                window.location.assign("./modificar-cliente.html")
            }
            else {
                window.location.assign("./login3.html")
            }
        },
        btnFiltrar() {
            let enOferta = document.querySelector('#_en-oferta').checked
            let precioMin = document.querySelector('#_precio-min').value
            let precioMax = document.querySelector('#_precio-max').value
            let categoriasSeleccionadas = Array.from(document.querySelectorAll('._checkbox')).filter(categoria => categoria.checked);
            let productos = document.querySelectorAll('._card')

            productos.forEach(producto => {
                let quiereVerlo = false
                //filtros de categoría
                let i = 0;
                if (categoriasSeleccionadas.length > 0) {
                    while (!quiereVerlo && i < categoriasSeleccionadas.length) {
                        if (producto.id.substring(6) == categoriasSeleccionadas[i].id.substring(6)) {
                            quiereVerlo = true
                        }
                        i++
                    }
                }
                else {
                    quiereVerlo = true
                }
                //filtros de precio
                if ((precioMin != '' || precioMax != '') && quiereVerlo) {
                    let precio = parseInt(producto.querySelector('._precio-neto').textContent.split('$')[1])
                    if (precioMin != '' && precioMax != '') {
                        //filtrado con precio minimo y maximo
                        if (!(precio > precioMin && precio < precioMax)) {
                            quiereVerlo = false
                        }
                    }
                    else if (precioMin != '' && precioMax == '') {
                        //filtrado con precio minimo pero sin precio maximo
                        if (!(precio > precioMin)) {
                            quiereVerlo = false
                        }
                    }
                    else {
                        //filtrado con precio máximo pero sin precio minimo
                        if (!(precio < precioMax)) {
                            quiereVerlo = false
                        }
                    }
                }
                //filtro solo ofertas
                if (enOferta) {
                    if (!producto.querySelector('._descuento')) {
                        quiereVerlo = false
                    }
                }
                //Hace visible o invisibles los productos
                if (quiereVerlo) {
                    producto.classList.remove('_invisible')
                }
                else {
                    producto.classList.add('_invisible')
                }
            });
        },
        verDetalles(idProducto) {
            let url = `./product.html?${idProducto}`
            window.location.assign(url)
        },
        cargaCategorias(url) {
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    this.categorias = data
                    console.log(data)
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
        cargaProductos(url) {
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    this.productos = data
                    console.log(data)
                })
                .catch(err => console.log(err))
        }
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

document.addEventListener('change', () => {
    let catSelect = document.querySelector('#categoria')
    let opciones = document.querySelectorAll('#_lista-de-productos option')
    opciones.forEach(opcion => {
        if (catSelect.value == 'todas') {
            opcion.disabled = false
        } else {
            if (opcion.className.slice(8) == catSelect.value) {
                opcion.disabled = false
            }
            else {
                opcion.disabled = true
            }
        }
    });
})