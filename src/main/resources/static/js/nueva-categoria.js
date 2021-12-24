function nuevaCategoria() {
    let nombreCategoria=document.getElementById("nuevaCategoria").value

    categoriaNueva={
        nombre: nombreCategoria
    };
    var url="http://tp-integrador-back-end.herokuapp.com/api/post/categorias"
    const opciones = {
        method: 'POST',
        body: JSON.stringify(categoriaNueva),
        headers: {
            'Content-type': 'application/json'
        },
        redirect: 'follow'
    }
    fetch(url, opciones)
            .then(() => location.reload())
            .catch(err => console.log(err))
            .then(() => window.location.assign("./index-admin.html"))
}