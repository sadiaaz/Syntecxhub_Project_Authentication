# SyntecXHub Authentication System

A modern **full-stack authentication system** built with the **MERN stack** (MongoDB, Express, React, Node.js).  
This project features a **beautiful Glassmorphism UI** and a **secure backend** for user management.

---

## 🚀 Key Features

- **User Registration (Signup):** Secure user signup using React frontend and Node.js backend.
- **User Login:** JWT-based authentication to protect routes.
- **State Management:** React hooks (`useState`) for form data handling.
- **RESTful API Integration:** Axios or custom API module for frontend-backend communication.
- **Backend Security:** JWT authentication middleware (`verifyToken.js`) ensures protected routes.
- **Database Connectivity:** MongoDB integration via Mongoose (`db.js`).
- **UI/UX:** Modern **Glassmorphism** design for login and signup pages.
- **Responsive Design:** Works on all screen sizes with smooth transitions.

---

## 📁 Project Structure

```text
├── client/                     # React Frontend
│   ├── src/
│   │   ├── Dashboard.js        # Dashboard Page
│   │   ├── Dashboard.css       # Dashboard Styles
│   │   ├── Login.js            # Login Page
│   │   ├── Login.css           # Login Styles
│   │   ├── Signup.js           # Signup Page
│   │   └── Signup.css          # Signup Styles
├── config/                     # Database Configuration
│   └── db.js
├── middleware/                 # Auth Middlewares
│   └── verifyToken.js
├── models/                     # Database Schemas
│   └── User.js
├── routes/                     # API Endpoints
│   └── userRoutes.js
└── server.js                   # Backend Entry Point

---

## 🛠️ Tech Stack

- **Frontend:** React.js, Bootstrap, CSS3 (Glassmorphism styling)  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Mongoose)  
- **Tools & Libraries:** Axios, React Router DOM, bcrypt, JWT  

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone <repository-url>
