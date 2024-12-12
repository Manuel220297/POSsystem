let subtotal = 0;

function addToBilling(productName, price) {
    // Create a list item for the product
    const li = document.createElement('li');
    li.classList.add('billing-item');

    // Add the product name and price to the list item
    li.innerHTML = `${productName} - $${price.toFixed(2)} <button class="remove-btn" onclick="removeFromBilling(this, ${price})">X</button>`;

    // Add the list item to the billing list
    const billingList = document.getElementById('billingList');
    billingList.appendChild(li);

    // Update the subtotal
    subtotal += price;
    document.getElementById('subtotal').textContent = subtotal.toFixed(2);
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
    // Hide all products first
    const allProducts = document.querySelectorAll('.product');
    allProducts.forEach(product => {
        product.style.display = 'none';
    });

    // Show the selected category's products
    if (category === 'all') {
        // Show all products if "All" is selected
        allProducts.forEach(product => {
            product.style.display = 'block';
        });
    } else {
        const filteredProducts = document.querySelectorAll(`.${category}`);
        filteredProducts.forEach(product => {
            product.style.display = 'block';
        });
    }
}