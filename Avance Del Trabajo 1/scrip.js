const carrito = document.getElementById("carrito");
const elemento1 = document.getElementById("lista-1");
const lista = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.getElementById("vaciar-carrito");

cargarEvenlisteners();

function cargarEvenlisteners() {

    elemento1.addEventListener("click", comprarElemento);
    carrito.addEventListener("click", eliminarElemento);
    vaciarCarritoBtn.addEventListener("click", vaciarCarrito);
}

function comprarElemento(e) {
    e.preventDefault(),
    it(e.target.classList.contains("agregar-carrito")) {
        const elemento = e.target.parenElement.parenElement;
        leerDatosElemento(elemento);
    }
}


function leerDatosElemento(elemento) {
    const infoElement = {
        imagen:elemento.querySelector("img").src,
        titulo: elemento.querySelector("h3").textContent,
        precio: elemento.querySelector(".precio").textContent,
        id: elemento.querySelector("a").getAttribute("data-id")
    }
    insertarCarrito(infoElement);

}

function insertarCarrito(elemento) {
    const row=document.createElement("tr");
    row.innerHTML = `
        <td>
            <img src="${elemento.imagen}" width=100 />
        </td>
        <td>
            ${elemento.titulo}
        </td>
        <td>
        ${elemento.precio}
        </td>
        <td>
            <a href="a class="borrar" data-id="${elemento.id}">x </a>
        </td>

    `;

    lista.appendChild(row);
}

function eliminarElemento(e) {
    e.preventDefault();
    let elemento,
        elementoId;
    if(e.target.classlist.contains("borrar")) {
        e.target.parenElement.parentElement.remove();
        elemento = e.target.parentElement.parentElement;
        elementoId = elemento.querySelector ("a").getAttribute ("data-id");
    }
}

function vaciarCarrito() {
    while(lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    return false;
}