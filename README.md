# Product Booking Dashboard

A responsive web application for managing product bookings and viewing product details. Built with vanilla JavaScript, HTML5, and CSS3, demonstrating core web development concepts with a clean, modern interface.

## 🚀 Technical Stack

| Component | Technology |
|-----------|------------|
| Language | HTML5, CSS3, JavaScript (ES6+) |
| Architecture | MVC Pattern (Client-Side) |
| Database | Local Data Objects |
| Build Tool | Vanilla JS (No dependencies) |

## ✨ Key Features

- **Product Display**: Browse products with categories, prices, and availability status
- **Dynamic Table Generation**: Generate product tables from local data objects
- **Booking System**: One-click booking with instant confirmation
- **Responsive Design**: Mobile-friendly UI that adapts to all screen sizes
- **Interactive Controls**: Adjust table size, check prices, and manage products dynamically
- **Professional UI**: Clean design with smooth animations and hover effects

## 🛠️ Architecture and Design Highlights

This project follows a **Client-Side MVC Architecture** for clean separation of concerns:

**Model** (`productList`): Encapsulates product data with properties (name, category, price, status)

**View** (`index.html`): Dashboard with product table and interactive controls

**Controller** (`main.js`): Handles user interactions, event listeners, and business logic

### File Structure
```
product-booking-dashboard/
├── index.html              # Main dashboard UI
├── CSS/
│   └── style.css           # Responsive styling
├── scripts/
│   └── main.js             # Core functionality and event handlers
└── README.md               # Project documentation
```

## ⚙️ Setup and Installation

### 1. Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server setup required - runs entirely in the browser

### 2. Installation
Clone the repository:
```bash
git clone https://github.com/yourusername/product-booking-dashboard.git
cd product-booking-dashboard
```

### 3. Running the Application
Open `index.html` directly in your browser or use a live server:
```bash
# Option 1: Direct open
open index.html

# Option 2: VS Code Live Server
Right-click index.html → Open with Live Server
```

## 💻 Usage Guide

### Core Functions

| Function | Purpose | Parameters |
|----------|---------|------------|
| `displaySamplePrice(price)` | Display sample product price | `price` (number) |
| `resizeTable()` | Toggle table width between 80% and 100% | None |
| `handleBooking(event)` | Process booking requests | `event` (click event) |
| `generateProductTable()` | Regenerate table from productList | None |

### Sample Product Data
```javascript
const productList = [
    { name: "Wireless Earbuds", category: "Electronics", price: 1999, status: "Available" },
    { name: "Office Chair", category: "Furniture", price: 5499, status: "Out of Stock" },
    { name: "Smart Watch", category: "Electronics", price: 2999, status: "Available" }
];
```

### How to Extend
Add new products to `productList`:
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

## 🎨 Design Highlights

- **Color Scheme**: Professional dark red (#b30000) with neutral grays
- **Typography**: Segoe UI font family for modern appearance
- **Responsiveness**: Flexbox-based layout for mobile, tablet, and desktop
- **Interactivity**: Smooth button hover effects and transitions
- **Accessibility**: Semantic HTML and clear action labels

## 🚀 Future Enhancements

- Backend API integration for real-time product data
- User authentication and login system
- Advanced search and filter functionality
- Payment gateway integration
- Order history and tracking
- Admin dashboard for product management
- Email confirmation for bookings

## 📄 License

MIT License - Free to use and modify

## 👨‍💻 Author

**Srinath Udhayakumar**  
Electronics and Communication Engineering Student | Web Developer  
[GitHub](https://github.com/Srinath-Udhayakumar) | [LinkedIn](https://www.linkedin.com/in/srinath-udhayakumar-14sep2000)