//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//  add to cart
let cartItems = [];
let totalPrice = 0;
// adding items to cart
document.querySelectorAll('.add-to-cart').forEach((button) => {
  button.addEventListener('click', () => {
    const productId = button.getAttribute('data-id');
    const productName = button.getAttribute('data-name');
    const productPrice = parseFloat(button.getAttribute('data-price'));

    // Check if the product is already in the cart
    const existingItem = cartItems.find((item) => item.id === productId);

    if (existingItem) {
      // If the product is already in the cart, increment its quantity
      existingItem.quantity += 1;
    } else {
      // If it's not in the cart, add it
      cartItems.push({
        id: productId,
        name: productName,
        price: productPrice,
        quantity: 1,
      });
    }

    // Update the cart display
    updateCartDisplay();
  });
});


// cart display
function updateCartDisplay() {
  const cartList = document.getElementById('cart-items');
  cartList.innerHTML = '';

  totalPrice = 0;

  cartItems.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item';

    // Product name and quantity
    const itemName = document.createElement('span');
    itemName.textContent = `${item.name} x${item.quantity}`;

    // Increment and decrement buttons
    const incButton = document.createElement('button');
    incButton.textContent = '+';
    incButton.className = 'btn btn-sm btn-success mx-2';
    incButton.addEventListener('click', () => {
      item.quantity += 1;
      updateCartDisplay();
    });

    const decButton = document.createElement('button');
    decButton.textContent = '-';
    decButton.className = 'btn btn-sm btn-danger';
    decButton.addEventListener('click', () => {
      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        cartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
      }
      updateCartDisplay();
    });

    // Remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'btn btn-danger btn-sm float-right';
    removeButton.addEventListener('click', () => {
      cartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
      updateCartDisplay();
    });

    // Calculate and display the total price for this item
    const itemTotal = item.price * item.quantity;
    totalPrice += itemTotal;

    const totalText = document.createElement('span');
    totalText.textContent = `$${itemTotal.toFixed(2)}`;

    listItem.appendChild(itemName);
    listItem.appendChild(incButton);
    listItem.appendChild(decButton);
    listItem.appendChild(removeButton);
    listItem.appendChild(totalText);

    cartList.appendChild(listItem);
  });

  // Display the total price
  document.getElementById('total-price').textContent = `$${totalPrice.toFixed(2)}`;
}

