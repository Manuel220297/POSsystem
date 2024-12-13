let subtotal = 0;

// Function to add products to the billing list
function addToBilling(productName, price) {
    const billingList = document.getElementById('billingList');
    const subtotalElem = document.getElementById('subtotal');
    let subtotal = parseFloat(subtotalElem.innerText);

    // Check if the product is already in the list
    const existingItem = [...billingList.children].find(
        item => item.dataset.productName === productName
    );

    if (existingItem) {
        // Increment the quantity and update the total price for this item
        const quantityElem = existingItem.querySelector('.quantity');
        const priceElem = existingItem.querySelector('.price');
        const quantity = parseInt(quantityElem.innerText) + 1;

        quantityElem.innerText = quantity;
        priceElem.innerText = `$${(quantity * price).toFixed(2)}`;
    } else {
        // Create a new list item if the product is not already in the list
        const listItem = document.createElement('li');
        listItem.dataset.productName = productName;
        listItem.classList.add('billing-item');

        listItem.innerHTML = `
            <span>${productName}</span>
            <span class="quantity">1</span> x $${price.toFixed(2)}
            <span class="price">$${price.toFixed(2)}</span>
            <button onclick="removeFromBilling(this, ${price})">X</button>
        `;
        billingList.appendChild(listItem);
    }

    // Update the subtotal
    subtotal += price;
    subtotalElem.innerText = subtotal.toFixed(2);
}

// Function to remove products from the billing list
function removeFromBilling(button, price) {
    const billingList = document.getElementById('billingList');
    const subtotalElem = document.getElementById('subtotal');
    let subtotal = parseFloat(subtotalElem.innerText);

    const listItem = button.parentElement;
    const quantityElem = listItem.querySelector('.quantity');
    const quantity = parseInt(quantityElem.innerText);

    if (quantity > 1) {
        // Decrement the quantity and update the total price for this item
        quantityElem.innerText = quantity - 1;
        const priceElem = listItem.querySelector('.price');
        priceElem.innerText = `$${((quantity - 1) * price).toFixed(2)}`;
    } else {
        // Remove the item if the quantity is 1
        billingList.removeChild(listItem);
    }

    // Update the subtotal
    subtotal -= price;
    subtotalElem.innerText = subtotal.toFixed(2);
}

function removeFromBilling(button, price) {
    // Remove the product from the billing list
    const li = button.parentElement;
    li.remove();

    // Update the subtotal
    subtotal -= price;
    document.getElementById('subtotal').textContent = subtotal.toFixed(2);
}

function printBill() {
    // You can implement this function to print the bill or show a confirmation.
    alert("Bill printed!");
}

function filterProducts(category) {
    const allProducts = document.querySelectorAll('.product');
    allProducts.forEach(product => {
        product.style.display = category === 'all' || product.classList.contains(category) ? 'block' : 'none';
    });
}
