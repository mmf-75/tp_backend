// Call the dataTables jQuery plugin
$(document).ready(function () {
    //on ready
});


async function iniciarSesion() {

    let datos = {
        email: document.getElementById('txtEmail').value,
        password: document.getElementById('txtPassword').value
    };

    const url = "https://tp-integrador-back-end.herokuapp.com/api/login"

    const opciones = {
        method: 'POST',
        body: JSON.stringify(datos),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }

    fetch(url, opciones)
        .then(res => res.text())
        .then(data => {
            if (data != 'FAIL') {
                console.log(data);
                localStorage.token = data;
                localStorage.email = datos.email;
                // window.location.href = 'index.html'
            } else {
                alert("Credenciales incorrectas, vuelva a intentarlo!!!");
            }
        })

}


