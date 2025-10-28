# Product Booking Dashboard

A modern, responsive web application for viewing product details and managing product bookings. This dashboard provides an intuitive interface to browse products, check availability, and initiate booking requests.

## 📋 Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Features Explained](#features-explained)
- [File Descriptions](#file-descriptions)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- **Product Display**: View a curated list of products with categories, prices, and availability status
- **Dynamic Table Generation**: Generate product tables dynamically from local data
- **Booking System**: One-click booking requests for available products
- **Price Display**: Real-time price information with rupee (₹) currency formatting
- **Responsive Design**: Mobile-friendly interface that adapts to all screen sizes
- **Interactive Controls**: Adjust table size and manage product display with easy-to-use buttons
- **Professional UI**: Clean, modern design with smooth animations and transitions

## 🎯 Demo

The application displays a dashboard with:
- A welcoming header with emoji accent
- Three action buttons for common operations
- A product table with sortable columns
- Individual product rows with booking functionality
- Professional footer with copyright information

**Live Features:**
- Check sample prices with the "Check Sample Price" button
- Adjust table dimensions with the "Adjust Table Size" button
- Generate product table dynamically using the "Generate Table" button

## 🛠️ Technologies Used

| Technology | Purpose |
|-----------|---------|
| **HTML5** | Semantic markup and structure |
| **CSS3** | Styling and responsive design |
| **JavaScript (ES6)** | Interactivity and dynamic functionality |
| **Vanilla JS** | No external dependencies required |

## 📁 Project Structure

```
product-booking-dashboard/
│
├── index.html              # Main HTML file with dashboard structure
├── CSS/
│   └── style.css           # Stylesheet with responsive design
├── scripts/
│   └── main.js             # JavaScript functionality
├── images/
│   └── favicon.ico         # Website favicon
└── README.md               # Project documentation
```

## 🚀 Installation

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server setup required - runs entirely in the browser

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/product-booking-dashboard.git
   cd product-booking-dashboard
   ```

2. **Open the application**
   - Open `index.html` directly in your web browser, or
   - Use a live server extension (VS Code Live Server recommended)

3. **Start using**
   - The dashboard will load with sample products
   - Use the action buttons to interact with the dashboard

## 💻 Usage

### Basic Operations

**1. View Products**
- The dashboard displays products in a table format upon page load
- Each product shows: Name, Category, Price, and Availability Status

**2. Check Sample Price**
```javascript
displaySamplePrice(100)  // Shows alert with sample price
```
- Click "Check Sample Price" button
- View the sample price demonstration

**3. Adjust Table Size**
```javascript
resizeTable()  // Toggles between 80% and 100% width
```
- Click "Adjust Table Size" button
- Table width toggles between 80% and 100%

**4. Generate Dynamic Table**
```javascript
generateProductTable()  // Regenerates table from productList
```
- Click "Generate Table" button
- Table is regenerated from the local product data

**5. Book a Product**
- Click "Book Now" button next to any product
- Receive confirmation with product details
- Request is processed and logged

## 📖 Features Explained

### Product List
The application uses a local product database:
```javascript
const productList = [
    { name: "Wireless Earbuds", category: "Electronics", price: 1999, status: "Available" },
    { name: "Office Chair", category: "Furniture", price: 5499, status: "Out of Stock" },
    { name: "Smart Watch", category: "Electronics", price: 2999, status: "Available" }
];
```

### Core Functions

**displaySamplePrice(price)**
- Displays a sample product price
- Parameters: `price` (number) - The price to display
- Output: Alert popup with formatted price

**resizeTable()**
- Toggles table width between 80% and 100%
- No parameters required
- Useful for responsive layout testing

**handleBooking(event)**
- Processes booking requests
- Parameters: `event` - The click event object
- Extracts product name and shows confirmation
- Logs booking action

**generateProductTable()**
- Creates table rows from `productList` array
- Clears existing rows before regenerating
- Dynamically generates rows for each product
- Shows success confirmation

## 📄 File Descriptions

### index.html
- Main entry point of the application
- Contains semantic HTML5 structure
- Includes dashboard layout with table and buttons
- Links to CSS and JavaScript files
- Sets up favicon and metadata

### CSS/style.css
- Professional color scheme (dark red theme - #b30000)
- Responsive design with flexbox
- Button hover effects and transitions
- Table styling with alternating row colors
- Mobile-friendly breakpoints

### scripts/main.js
- All interactive functionality
- Product data storage
- Event handlers for buttons and bookings
- Dynamic table generation logic
- DOM manipulation methods

## 🎨 Design Highlights

- **Color Scheme**: Professional dark red (#b30000) with neutral grays
- **Typography**: Segoe UI font for modern appearance
- **Layout**: Centered dashboard with maximum width constraint
- **Interactivity**: Smooth transitions and hover effects
- **Accessibility**: Semantic HTML and clear button labels

## 🔄 Responsive Features

The dashboard is fully responsive:
- Desktop (1200px+): Full-width table with optimal spacing
- Tablet (768px - 1199px): Adjusted padding and font sizes
- Mobile (< 768px): Stacked layout with touch-friendly buttons

## 🚀 Future Enhancements

Potential features to improve the project:

1. **Backend Integration**
   - Connect to a database for real product data
   - Implement API endpoints for CRUD operations

2. **User Authentication**
   - Login/signup functionality
   - User-specific booking history
   - Profile management

3. **Search & Filter**
   - Search products by name or category
   - Filter by price range
   - Sort by availability or price

4. **Advanced Booking**
   - Calendar date selection
   - Quantity management
   - Payment gateway integration

5. **Notifications**
   - Email confirmation for bookings
   - Stock update notifications
   - Booking status tracking

6. **Analytics Dashboard**
   - Popular products chart
   - Booking trends
   - User statistics

## 📝 Code Examples

### Adding a New Product
```javascript
const newProduct = { 
    name: "Keyboard", 
    category: "Electronics", 
    price: 2499, 
    status: "Available" 
};
productList.push(newProduct);
generateProductTable();
```

### Custom Booking Handler
```javascript
function handleBooking(event) {
    const row = event.target.closest("tr");
    const productName = row.children[0].innerText;
    const price = row.children[2].innerText;
    alert(`Booking confirmed for ${productName} at ${price}`);
}
```

## 🤝 Contributing

Contributions are welcome! Follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m 'Add your feature'`
4. Push to branch: `git push origin feature/your-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License. See LICENSE file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- Portfolio: [your-portfolio.com](https://your-portfolio.com)

## 📞 Support

For issues, questions, or suggestions:
- Open an [Issue](https://github.com/yourusername/product-booking-dashboard/issues)
- Contact via email: your.email@example.com
- Check [Discussions](https://github.com/yourusername/product-booking-dashboard/discussions)

## 🙏 Acknowledgments

- Modern web development best practices
- Responsive design principles
- User experience optimization

---

**Made with ❤️ by [Your Name]**

Last Updated: October 2025