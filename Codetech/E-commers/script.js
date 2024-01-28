function addToCart() {
    const quantity = document.getElementById('quantity').value;

    const cartItem = {
        name: 'Product',
        price: 2000,
        quantity: parseInt(quantity),
    };

    const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    const existingIndex = existingCartItems.findIndex(item => item.name === cartItem.name);

    if (existingIndex !== -1) {
        existingCartItems[existingIndex].quantity += cartItem.quantity;
    } else {
        existingCartItems.push(cartItem);
    }

    localStorage.setItem('cartItems', JSON.stringify(existingCartItems));

    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItemsElement = document.getElementById('cartItems');
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    cartItemsElement.innerHTML = '';

    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - Quantity: ${item.quantity} - Price: Rs${(item.price * item.quantity).toFixed(2)}`;
        cartItemsElement.appendChild(li);
    });
}

updateCartDisplay();
