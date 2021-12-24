
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
document.getElementById("modificarCategoria").value=datos.nombre

function modificarCategoria() {
  let nombre=document.getElementById("modificarCategoria").value

  categoriaModificada={
      id: datos.id,
      nombre: nombre,
  }
  var url="https://tp-integrador-back-end.herokuapp.com/api/put/categorias"
  const opciones = {
      method: 'PUT',
      body: JSON.stringify(categoriaModificada),
      headers: {
          'Content-type': 'application/json'
      },
      redirect: 'follow'
  }
  fetch(url, opciones)
        .then(() => window.location.assign("./index-admin.html"))
          .catch(err => console.log(err))
}