// Sample product list (local data)
const productList = [
    { name: "Wireless Earbuds", category: "Electronics", price: 1999, status: "Available" },
    { name: "Office Chair", category: "Furniture", price: 5499, status: "Out of Stock" },
    { name: "Smart Watch", category: "Electronics", price: 2999, status: "Available" }
];

// Display sample price example
function displaySamplePrice(price) {
    alert(`Sample product price is ₹${price}`);
}

// Resize the table (basic demo)
function resizeTable() {
    const table = document.getElementById("product-table");
    table.style.width = table.style.width === "100%" ? "80%" : "100%";
}

// Simulate booking action
function handleBooking(event) {
    const row = event.target.closest("tr");
    const productName = row.children[0].innerText;
    alert(`Booking request sent for ${productName}`);
}

// Generate table dynamically from local product list
function generateProductTable() {
    const tableBody = document.getElementById("product-table-body");
    tableBody.innerHTML = ""; // Clear old rows

    productList.forEach(product => {
        const row = document.createElement("tr");
        row.innerHTML = `
      <td>${product.name}</td>
      <td>${product.category}</td>
      <td>₹${product.price}</td>
      <td>${product.status}</td>
      <td><button onclick="handleBooking(event)">Book Now</button></td>
    `;
        tableBody.appendChild(row);
    });

    alert("Product table generated successfully!");
}
