
function parsearURL() {
    let argumentos = location.search.substring(1).split('&');
    let cad = '{'
    for (let i = 0; i < argumentos.length; ++i) {
        let partes = argumentos[i].split('=');
        let campo, valor
        if (partes != null) {
            campo = partes[0]
            partes[1] != null ? valor = partes[1] : valor = "null"
        }
        cad += ` "${campo}": "${valor}", ` // "id": 1, || "nombre": marcela, [...]
    }
    cad = cad.slice(0, -2)
    cad += ' }'
    return correccionesURL(JSON.parse(cad))
}
function correccionesURL(obj) {
    for (key in obj) {
        obj[key] = decodeURI(obj[key])
    }
    return obj
}

datos=parsearURL();
console.log(datos);
document.getElementById("modificarNombre").value=datos.nombreProducto
document.getElementById("modificarDescripcion").value=datos.descripcion
document.getElementById("modificarFoto").value=datos.fotoProducto
document.getElementById("modificarPrecio").value=datos.precio
document.getElementById("modificarStock").value=datos.stock
document.getElementById("modificarDescuento").value=datos.descuento
document.getElementById("modificarCategoria").value=datos.categoriaModel

function modificarProducto() {
  let nombre=document.getElementById("modificarNombre").value
  let descripcion=document.getElementById("modificarDescripcion").value
  let foto=document.getElementById("modificarFoto").value
  let precio=parseInt(document.getElementById("modificarPrecio").value)
  let stock=parseInt(document.getElementById("modificarStock").value)
  let descuento=parseInt(document.getElementById("modificarDescuento").value)
  let categoria=parseInt(document.getElementById("modificarCategoria").value)

  productoModificado={
      id: datos.id,
      nombreProducto: nombre,
      descripcion: descripcion,
      fotoProducto: foto,
      precio: precio,
      stock: stock,
      descuento: descuento,
      categoriaModel: {id:categoria}
  }
  var url="http://localhost:8080/api/put/productos"
  const opciones = {
      method: 'PUT',
      body: JSON.stringify(productoModificado),
      headers: {
          'Content-type': 'application/json'
      },
      redirect: 'follow'
  }
  fetch(url, opciones)
        .then(() => window.location.assign("./index-admin.html"))
          .catch(err => console.log(err))
}