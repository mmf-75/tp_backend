var datos = new Vue({
    data: {

    },
    created() {

    },
    methods: {
        iniciarSesion() {
            let txtEmail = document.querySelector('#_email')
            let txtContrasenia = document.querySelector('#_contrasenia')
            aux = {
                email: txtEmail.value.toLowerCase(),
                contrasenia: txtContrasenia.value
            }
            console.log(aux);
            let url = "http://localhost:8080/api/logueo"
            let opciones = {
                method: 'POST',
                body: JSON.stringify(aux),
                headers: {
                    'Content-type': 'application/json'
                }
            }
            fetch(url, opciones)
                .then(res => res.text())
                .then(id => {
                    if (id != '') {
                        let data = {
                            cliente: id,
                            conectado: true
                        }
                        console.table(data)
                        localStorage.setItem("tp-backend-cliente", JSON.stringify(data))
                        fetch(`http://localhost:8080/api/get/clientes/${data.cliente}`)
                        .then(res => res.text())
                        .then(respuesta => {
                            let aux2 = JSON.parse(respuesta)
                            console.log(aux2)
                            if (aux2.administrador == true) {
                                window.location.assign("./index-admin.html")
                            } else {
                                window.location.assign("./index.html")
                            }
                        })
                    }
                    else {
                        console.log('ERROR');
                    }

                })
        }
    }
})

new Vue({
    el: '#_vue-main'
})

