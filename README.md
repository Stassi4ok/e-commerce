# 🛒 E-Commerce Web Application

Modern E-commerce web application built with React and Vite.  
The project includes product catalog, user authentication, shopping cart, and responsive UI.

---

## 🚀 Features

### 👤 User System
- User registration and login
- Authentication (session-based / localStorage)
- Protected routes for authenticated users

### 🛍️ Products
- Product catalog with categories:
  - Phones
  - Computers
  - Smart Watches
  - Cameras
  - Gaming
  - Headphones
- Product details (name, price, rating, description)
- Dynamic product rendering

### 🛒 Shopping Cart
- Add / remove products from cart
- Increase / decrease quantity
- Cart total calculation
- Persistent cart (localStorage)

### 🎨 UI/UX
- Responsive design (mobile / desktop)
- Clean modern interface
- Product cards with images and ratings
- Smooth navigation

---

## 🧰 Tech Stack

- React.js
- Vite
- React Router
- Context API (state management)
- CSS / SCSS (or your choice)
- LocalStorage (for auth & cart persistence)

---

## 📁 Project Structure

```txt
src/
│
├── assets/          # Images and static files
├── components/      # Reusable UI components
├── pages/           # Application pages
├── context/         # Auth & Cart context
├── data/            # Products data (JSON)
├── router/          # App routing
├── utils/           # Helper functions
├── App.jsx
└── main.jsx