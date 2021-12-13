var categorias

function crearCategorias() {
    let nav = document.getElementById('_js-categorias')
    const fragment = document.createDocumentFragment()
    for (const categoria of categorias) {
        const newA = document.createElement('a');
        newA.href='#'
        newA.innerText = categoria.nombre
        fragment.appendChild(newA);
    }
    nav.appendChild(fragment);

    let select = document.getElementById('categoria')
    const fragment2 = document.createDocumentFragment()
    for (const categoria of categorias) {
        const newOption = document.createElement('option');
        newOption.value = categoria.nombre.toLowerCase()
        newOption.innerText = categoria.nombre
        fragment2.appendChild(newOption);
    }
    select.appendChild(fragment2)

    let footer = document.getElementById('_footer-categorias')
    const fragment3 = document.createDocumentFragment()
    for (const categoria of categorias) {
        const newA = document.createElement('a');
        newA.href='#'
        newA.innerText = categoria.nombre
        fragment3.appendChild(newA);
    }
    footer.appendChild(fragment3)
}

function cargaDatos() {
    fetch("http://localhost:8080/api/get/categorias/")
        .then(res => res.json())
        .then(data => {
            categorias = data
        })
        .then(() => crearCategorias())
        .catch(err => {
            console.log(err)
        })
}

cargaDatos()
