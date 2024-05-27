document.addEventListener('DOMContentLoaded', () => {
    const cartItems = [];
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            addToCart(button);
        });
    });

    function addToCart(button) {
        const gameItem = button.parentElement;
        const gameId = gameItem.getAttribute('data-id');
        const gameTitle = gameItem.querySelector('h2').textContent;
        const gamePrice = parseFloat(gameItem.querySelector('p').textContent.replace('$', ''));

        const cartItem = {
            id: gameId,
            title: gameTitle,
            price: gamePrice
        };

        cartItems.push(cartItem);
        updateCart();
    }

    function updateCart() {
        cartItemsElement.innerHTML = '';
        let total = 0;
        cartItems.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.title} - $${item.price.toFixed(2)}`;
            cartItemsElement.appendChild(li);
            total += item.price;
        });
        cartTotalElement.textContent = total.toFixed(2);
    }

    document.getElementById('checkout').addEventListener('click', () => {
        if (cartItems.length === 0) {
            alert('El carrito está vacío');
        } else {
            alert('Gracias por su compra');
            cartItems.length = 0;
            updateCart();
        }
    });

    if (document.getElementById('login-form')) {
        document.getElementById('login-form').addEventListener('submit', (event) => {
            event.preventDefault();
            handleLogin();
        });
    }

    function handleLogin() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simulación de autenticación básica
        if (username === 'usuario' && password === 'password') {
            alert('Inicio de sesión exitoso');
            window.location.href = 'index.html'; // Redirigir al usuario a la página de inicio
        } else {
            alert('Nombre de usuario o contraseña incorrectos');
        }
    }
});