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
    if(e.target.classList.contains("agregar-carrito")) {
        const elemento = e.target.parenElement.parenElement;
        leerDatosElemento(elemento);
    }
}


function leerDatosElemento(elemento) {
    const infoElement = {
        img:elemento.querySelector("img").src,
        titulo: elemento.querySelector("h3").textContent,
        precio: elemento.querySelector(".precio").textContent,
        id: elemento.querySelector("a").getAttribute("data-id")
    }
    insertarCarrito(infoElement);

}

function insertarCarrito(elemento) {
    const row=document.createElement("tr");
    row.innerHTML =
    <td>
        <img src="$"
    </td>
    <td>
    </td>
    <td>
    </td>
}