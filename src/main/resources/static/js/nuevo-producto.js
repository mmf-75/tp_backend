function nuevoProducto() {
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
    console.log(productoNuevo)
    var url="http://tp-integrador-back-end.herokuapp.com/api/post/productos"
    const opciones = {
        method: 'POST',
        body: JSON.stringify(productoNuevo),
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