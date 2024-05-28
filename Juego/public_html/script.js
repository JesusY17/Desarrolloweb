
/*games*/
let cart = [];
let total = 0;

function addToCart(productName, productPrice, productId) {
    const product = { name: productName, price: productPrice, id: productId };
    cart.push(product);
    total += productPrice;
    updateCart();
}

function removeFromCart(productId) {
    const productIndex = cart.findIndex(product => product.id === productId);
    if (productIndex !== -1) {
        total -= cart[productIndex].price;
        cart.splice(productIndex, 1);
    }
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('cart-total');
    
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Eliminar';
        removeButton.onclick = () => removeFromCart(item.id);
        li.appendChild(removeButton);
        cartItems.appendChild(li);
    });
    
    totalElement.textContent = total.toFixed(2);
}

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', event => {
        const productItem = event.target.closest('.game-item');
        const productId = parseInt(productItem.getAttribute('data-id'), 10);
        const productName = productItem.querySelector('h2').textContent;
        const productPrice = parseFloat(productItem.querySelector('p').textContent.substring(1));
        addToCart(productName, productPrice, productId);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const carouselItems = document.querySelectorAll(".carousel-item");
    const prevButton = document.querySelector(".carousel-button.prev");
    const nextButton = document.querySelector(".carousel-button.next");
    let currentIndex = 0;

    // Función para mostrar el elemento actual y ocultar los demás
    function showCurrentSlide() {
        carouselItems.forEach((item, index) => {
            if (index === currentIndex) {
                item.classList.add("active");
            } else {
                item.classList.remove("active");
            }
        });
    }

    // Función para ir al slide anterior
    function showPrevSlide() {
        currentIndex = (currentIndex === 0) ? carouselItems.length - 1 : currentIndex - 1;
        showCurrentSlide();
    }

    // Función para ir al siguiente slide
    function showNextSlide() {
        currentIndex = (currentIndex === carouselItems.length - 1) ? 0 : currentIndex + 1;
        showCurrentSlide();
    }

    // Event listeners para los botones de navegación
    prevButton.addEventListener("click", function() {
        showPrevSlide();
    });
    nextButton.addEventListener("click", function() {
        showNextSlide();
    });

    // Mostrar el primer slide al cargar la página
    showCurrentSlide();
});

/*contacto*/

document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contact-form");
    const successMessage = document.getElementById("success-message");
    const clearButton = document.getElementById("clear-button");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada

        // Aquí puedes agregar el código para enviar el formulario mediante AJAX
        // Si el formulario se envía con éxito, muestra el mensaje de éxito y el botón de limpiar
        // Por ahora, simplemente mostraremos el mensaje de éxito y el botón de limpiar
        successMessage.style.display = "block"; // Mostrar el mensaje de éxito
        clearButton.style.display = "block"; // Mostrar el botón de limpiar
    });

    clearButton.addEventListener("click", function() {
        // Limpiar los campos del formulario
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";

        // Ocultar el mensaje de éxito y el botón de limpiar
        successMessage.style.display = "none";
        clearButton.style.display = "none";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const carouselItems = document.querySelectorAll(".carousel-item");
    });